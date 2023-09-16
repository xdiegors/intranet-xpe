import Menu from "../components/Menu";
import Box from "@mui/material/Box";

import News from "../components/News";
import Birthdays from "../components/Birthdays";
import FoodMenu from "../components/FoodMenu";

import { brown } from "@mui/material/colors";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Events from "../components/Events";
import Header from "../components/Header";

export default function Home() {
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
        }}
      >
        <Box maxWidth={790}>
          <News />
        </Box>
        <Box>
          <Events />
          <Birthdays />
          <FoodMenu />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
