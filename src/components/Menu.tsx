import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItems from "./MenuItems";

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={1} marginBottom={1}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Container sx={{ flexWrap: "wrap", flexDirection: "row" }}>
            <MenuItems title="Sobre a empresa" items={["Lojas", "História"]} />
            <MenuItems title="Documentos" items={["teste", "teste 2"]} />
            <MenuItems title="Procedimentos" items={["teste", "teste 2"]} />
            <MenuItems title="Formulários" items={["teste", "teste 2"]} />
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
