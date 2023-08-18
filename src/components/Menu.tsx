import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Container from "@mui/material/Container";

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={1} marginBottom={1}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Container sx={{ flexWrap: "wrap", flexDirection: "row" }}>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ marginRight: 3 }}
            >
              Sobre a empresa
            </Button>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ marginRight: 3 }}
            >
              Documentos
            </Button>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ marginRight: 3 }}
            >
              Procedimentos
            </Button>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ marginRight: 3 }}
            >
              Formulários
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
