import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

interface IGridComponent {
  firstColumnName: string;
  secondColumnName: string;
  data: string[];
  onEdit?: (arg: string) => void;
  onDelete?: (arg: string) => void;
}

const GridComponent = ({
  firstColumnName,
  secondColumnName,
  data,
  onEdit,
  onDelete,
}: IGridComponent) => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{firstColumnName}</TableCell>
              <TableCell>{secondColumnName}</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: string, index: number) => (
              <TableRow key={index}>
                <TableCell>{item[firstColumnName]}</TableCell>
                <TableCell>{item[secondColumnName]}</TableCell>
                <TableCell>
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
                    onClick={() => onDelete?.("teste")}
                  >
                    Excluir
                  </Button>
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
