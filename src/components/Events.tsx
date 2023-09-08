import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";

interface Events {
  _id: string;
  name: string;
  date: string;
}

export default function Events() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/events")
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.
        setEventsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
            {eventsData.map((row: Events) => (
              <TableRow key={row._id} hover role="checkbox" tabIndex={-1}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
