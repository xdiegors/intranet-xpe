import Box from "@mui/material/Box";
import { brown } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import GridComponent from "../components/GridComponent";
import { Stack, TextField, Typography } from "@mui/material";
import MenuItems from "../components/MenuItems";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { DatePicker } from "@mui/x-date-pickers";

const handleEdit = (index) => {
  // Handle edit action here
  console.log(`Edit item at index ${index}`);
};

const handleDelete = (index) => {
  // Handle delete action here
  console.log(`Delete item at index ${index}`);
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContentManagement() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [firstColumn, setFirstColumn] = useState("");
  const [secondColumn, setSecondColumn] = useState("");
  const [fetchLocation, setfetchLocation] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState("");

  const handleSelectedOption = (optionText: string) => {
    setSelectedOption(optionText);
    console.log("Selected Option:", optionText);

    switch (optionText) {
      case "Profile":
        setFirstColumn("date");
        setSecondColumn("name");
        setfetchLocation("events");
        break;
      case "My account":
        setFirstColumn("content");
        setSecondColumn("date");
        setfetchLocation("news");
        break;
      case "Logout":
        setFirstColumn("dish1");
        setSecondColumn("date");
        setfetchLocation("food");
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    // Use the content state to get the content value
    const contentValue = content;

    // Get the selected date from your DatePicker component
    const selectedDate = new Date(); // Replace with the actual selected date

    // Create a payload with the data
    const payload = {
      content: contentValue,
      date: selectedDate.toISOString(), // Convert date to ISO string format
    };

    // Make the POST request
    const username = "admin";
    const password = "desafio";

    fetch(`http://localhost:3000/news`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        "Content-Type": "application/json", // Set the content type to JSON
      }),
      body: JSON.stringify(payload), // Convert payload to JSON string
    })
      .then((response) => {
        if (response.ok) {
          // Handle success, e.g., show a success message
          console.log("Post request successful");
          handleClose(); // Close the modal after successful submission
        } else {
          // Handle errors, e.g., show an error message
          console.error("Post request failed");
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  useEffect(() => {
    const username = "admin";
    const password = "desafio";

    // Fetch data from the API with Basic Authentication
    fetch(`http://localhost:3000/${fetchLocation}`, {
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [fetchLocation]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: brown[50],
        paddingTop: 1,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/src/assets/images/logo.png"
          alt=""
          width={200}
          height={100}
        />
        <SearchBar />
      </Container>
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
          <Box marginBottom={3}>
            <Typography variant="h2" fontSize={30}>
              Gerenciar:
            </Typography>
            <MenuItems
              title={selectedOption || "Selecione"}
              onSelectMenuItem={handleSelectedOption}
            />
          </Box>
          {selectedOption && (
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
                firstColumnName={firstColumn}
                secondColumnName={secondColumn}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </>
          )}
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
              id="content"
              label="Conteúdo"
              name="content"
              autoComplete="content"
              autoFocus
              multiline
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <DatePicker />
            <Stack direction="row" spacing={2} marginTop={2}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                sx={{ mt: 3, mb: 2 }}
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
