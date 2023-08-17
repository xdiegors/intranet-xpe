import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            Sobre a empresa
          </Button>
          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            Documentos
          </Button>
          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            Procedimentos
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
