import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Paper, Stack } from "@mui/material";

interface IGridComponent {
  firstColumnName: string;
  secondColumnName?: string;
  data: string[] | { [key: string]: any }[];
  onEdit?: (arg: string) => void;
  onDelete?: (location: string, id: string) => void;
  location: string;
}

const GridComponent = ({
  firstColumnName,
  secondColumnName,
  data,
  onEdit,
  onDelete,
  location,
}: IGridComponent) => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{firstColumnName}</TableCell>
              {secondColumnName && <TableCell> {secondColumnName}</TableCell>}
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((item, index) => (
                <TableRow key={item._id ? item._id : index}>
                  <TableCell>{item[firstColumnName]}</TableCell>
                  {secondColumnName && (
                    <TableCell>{item[secondColumnName]}</TableCell>
                  )}
                  <TableCell>
                    <Stack direction="row" spacing={2} marginTop={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onEdit?.("teste")}
                        sx={{ marginRight: 1 }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => onDelete?.(location, item._id)}
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

export default GridComponent;
