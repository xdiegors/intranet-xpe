import Box from "@mui/material/Box";
import { brown } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import GridComponent from "../components/GridComponent"; // Assuming you've placed the GridComponent in a separate file
import { Stack, Typography } from "@mui/material";
import MenuItems from "../components/MenuItems";

const data = [
  { id: 1, Evento: "Palestra sobre vida saudável", Data: "26/08/2023" },
  {
    id: 2,
    Evento: "Apresentação dos resultados da empresa",
    Data: "15/09/2023",
  },
  { id: 3, Evento: "Evento de dia das crianças", Data: "12/10/2023" },
  { id: 4, Evento: "Palestra sobre finanças pessoais", Data: "18/11/2023" },
];

const handleEdit = (index) => {
  // Handle edit action here
  console.log(`Edit item at index ${index}`);
};

const handleDelete = (index) => {
  // Handle delete action here
  console.log(`Delete item at index ${index}`);
};

export default function ContentManagement() {
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
          <Stack direction="row">
            <Typography variant="body1">Gerenciar:</Typography>
            <MenuItems title="Sobre a empresa" />
          </Stack>
          <Typography variant="h1" fontSize={50}>
            Eventos
          </Typography>
          <Button variant="contained" sx={{ marginBottom: 1 }}>
            + Adicionar novo
          </Button>
          <GridComponent
            data={data}
            firstColumnName="Evento"
            secondColumnName="Data"
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
