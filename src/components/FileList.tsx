import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useState, useEffect } from "react";
import authHeader from "../services/AuthHeader";

const FileList = ({ files }) => {
  const [fileList, setFileList] = useState(files);

  useEffect(() => {
    setFileList(files);
  }, [files]);

  const handleDelete = (file) => {
    console.log(`O arquivo a seguir foi excluído: ${file}`);

    axios
      .delete(`http://localhost:3000/documents/${file}`, {
        headers: authHeader(),
      })
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.
        console.log(response);

        // Update the file list by removing the deleted file
        setFileList((prevFiles) => prevFiles.filter((f) => f !== file));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Arquivo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fileList.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} marginTop={2}>
                    {/* You can add an Edit button if needed */}
                    {/* <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onEdit?.("teste")}
                      sx={{ marginRight: 1 }}
                    >
                      Editar
                    </Button> */}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(file)}
                    >
                      Excluir
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FileList;
