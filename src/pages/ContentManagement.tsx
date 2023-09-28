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
import authHeader from "../services/AuthHeader";

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
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDelete = (fetchLocation: string, index: string) => {
    console.log(index);

    axios
      .delete(`http://localhost:3000/${fetchLocation}/${index}`, {
        headers: authHeader(),
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleSelectedOption = (optionText: string) => {
    setSelectedOption(optionText);
    console.log("Selected Option:", optionText);

    switch (optionText) {
      case "Eventos":
        setFirstColumn("date");
        setSecondColumn("name");
        setfetchLocation("events");
        break;
      case "Notícias":
        setFirstColumn("content");
        setSecondColumn("date");
        setfetchLocation("news");
        break;
      case "Cardápio":
        setFirstColumn("dish1");
        setSecondColumn("date");
        setfetchLocation("food");
        break;
      case "Documentos":
        setFirstColumn("dish1");
        setSecondColumn("date");
        setfetchLocation("documents");
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    // // Use the content state to get the content value
    // const contentValue = content;

    // // Get the selected date from your DatePicker component
    // const selectedDate = date; // Replace with the actual selected date

    // Create a payload with the data
    const payload = {
      content: content,
      date: date?.toISOString(), // Convert date to ISO string format
    };

    // Make the POST request
    axios
      .post("http://localhost:3000/news", payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    handleClose();
    setContent("");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${fetchLocation}`)
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [fetchLocation, data]);

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
          <Box marginBottom={3}>
            <Typography variant="h2" fontSize={30}>
              Gerenciar:
            </Typography>
            <MenuItems
              title={selectedOption || "Selecione"}
              onSelectMenuItem={handleSelectedOption}
              items={["Eventos", "Notícias", "Cardápio", "Documentos"]}
            />
          </Box>
          {selectedOption != "Documentos" && (
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
                location={fetchLocation}
              />
            </>
          )}
          {selectedOption === "Documentos" && <AddFile />}
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
            <DatePicker
              onChange={(newValue: Date | null) => setDate(newValue)}
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
