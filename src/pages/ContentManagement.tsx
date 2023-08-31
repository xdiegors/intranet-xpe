import Box from "@mui/material/Box";
import { brown } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import GridComponent from "../components/GridComponent";
import { Typography } from "@mui/material";
import MenuItems from "../components/MenuItems";
import { useState, useEffect } from "react";

const handleEdit = (index) => {
  // Handle edit action here
  console.log(`Edit item at index ${index}`);
};

const handleDelete = (index) => {
  // Handle delete action here
  console.log(`Delete item at index ${index}`);
};

export default function ContentManagement() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [firstColumn, setFirstColumn] = useState("");
  const [secondColumn, setSecondColumn] = useState("");
  const [fetchLocation, setfetchLocation] = useState("");

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
              <Button variant="contained" sx={{ marginBottom: 1 }}>
                + Adicionar novo
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
      </Container>
      <Footer />
    </Box>
  );
}
