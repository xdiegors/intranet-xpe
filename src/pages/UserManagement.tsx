import Box from "@mui/material/Box";
import { brown } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridComponent from "../components/GridComponent";
import { Stack, TextField, Typography } from "@mui/material";
import MenuItems from "../components/MenuItems";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { DatePicker } from "@mui/x-date-pickers";
import AddFile from "../components/AddFile";
import axios from "axios";
import Header from "../components/Header";

const handleEdit = (index: string) => {
  // Handle edit action here
  console.log(`Edit item at index ${index}`);
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserManagement() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleDelete = (fetchLocation: string, index: string) => {
    console.log(name);

    axios
      .delete(`http://localhost:3000/${fetchLocation}/${index}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
    setName("");
  };

  const handleSave = () => {
    const payload = {
      name: name,
      password: password,
    };

    axios
      .post("http://localhost:3000/users", payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    handleClose();
    setName("");
    setPassword("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [name, data]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: brown[50],
        paddingTop: 1,
      }}
    >
      <Header />
      <Menu />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 3,
        }}
      >
        <Box>
          <>
            <Button
              variant="contained"
              sx={{ marginBottom: 1 }}
              onClick={handleOpen}
            >
              Adicionar novo
            </Button>
            <GridComponent
              data={data}
              firstColumnName="name"
              onDelete={handleDelete}
              onEdit={handleEdit}
              location="users"
            />
          </>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Usuário"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack direction="row" spacing={2} marginTop={2}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSave}
              >
                Salvar
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Container>
      <Footer />
    </Box>
  );
}
