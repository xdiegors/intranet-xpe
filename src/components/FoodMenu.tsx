import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";

interface Food {
  _id: string;
  dish1: string;
  dish2: string;
  garnish1: string;
  garnish2: string;
  date: string;
}

export default function FoodMenu() {
  const [foodData, setFoodData] = useState<Food>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/food")
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.
        setFoodData(response.data[0]);
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
                Cardápio do Dia
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>Prato Principal 1</TableCell>
              <TableCell>{foodData?.dish1}</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>Prato Principal 2</TableCell>
              <TableCell>{foodData?.dish2}</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>Guarnição 1</TableCell>
              <TableCell>{foodData?.garnish1}</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>Guarnição 2</TableCell>
              <TableCell>{foodData?.garnish2}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
