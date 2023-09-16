import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Link to={"/"}>
        <img
          src="/src/assets/images/logo.png"
          alt=""
          width={200}
          height={100}
        />
      </Link>
      <SearchBar />
    </Container>
  );
}
