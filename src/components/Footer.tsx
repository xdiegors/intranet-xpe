import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: 50,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="body2" color="white">
          &copy; DRS Móveis - 2023
        </Typography>
      </Container>
    </Box>
  );
}
