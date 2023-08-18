import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "name", label: "Categoria", minWidth: 170 },
  { id: "code", label: "Nome", minWidth: 100 },
];

interface Data {
  name: string;
  code: string;
}

function createData(name: string, code: string): Data {
  return { name, code };
}

const rows = [
  createData("Palestra sobre vida saudável", "26/08/2023"),
  createData("Apresentação dos resultados da empresa", "15/09/2023"),
  createData("Evento de dia das crianças", "12/10/2023"),
  createData("Palestra sobre finanças pessoais", "18/11/2023"),
];

export default function Events() {
  return (
    <Paper sx={{ maxWidth: 340, marginBottom: 3 }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={2}
                sx={{ backgroundColor: "black", color: "white" }}
              >
                Próximos eventos
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
