import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useEffect, useState } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch the user's login status when the component mounts
    const userToken = AuthService.getToken();
    userToken !== null ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false);
  }, []); // Empty dependency array ensures this effect runs only once

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    AuthService.logout();
    navigate("/");
    setIsUserLoggedIn(false); // Update the login status
  };

  // Render null if the login status is still being determined
  if (isUserLoggedIn === null) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: 50,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="white">
          &copy; DRS Móveis - 2023
        </Typography>
        {isUserLoggedIn == true ? (
          <Button
            color="warning"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            variant="contained"
          >
            Sair
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={handleLogin}
            startIcon={<LoginIcon />}
            variant="contained"
          >
            Entrar
          </Button>
        )}
      </Container>
    </Box>
  );
}
