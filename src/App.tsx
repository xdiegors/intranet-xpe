import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Calendar from "./components/Calendar";
import News from "./components/News";
import Birthdays from "./components/Birthdays";
import FoodMenu from "./components/FoodMenu";

import { brown } from "@mui/material/colors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          minWidth: "100vw",
          Height: "100vh",
          backgroundColor: brown[50],
        }}
      >
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={1}
        >
          <Grid item xs={2}>
            <img
              src=""
              alt=""
              width={200}
              height={100}
              style={{ backgroundColor: "red" }}
            />
          </Grid>
          <Grid item xs={4}>
            <SearchBar />
          </Grid>
        </Grid>
        <Menu />
        <Grid container justifyContent={"center"} paddingTop={5} columnGap={5}>
          <Grid item xs={6}>
            <News />
            <News />
            <News />
          </Grid>
          <Grid item xs={3}>
            <Calendar />
            <Birthdays />
            <FoodMenu />
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
}

export default App;
