import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Box from "@mui/material/Box";

import Calendar from "../components/Calendar";
import News from "../components/News";
import Birthdays from "../components/Birthdays";
import FoodMenu from "../components/FoodMenu";

import { brown } from "@mui/material/colors";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Events from "../components/Events";

export default function Home() {
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
        }}
      >
        <Box maxWidth={790}>
          <News />
          <News />
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
