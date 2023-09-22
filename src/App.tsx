import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContentManagement from "./pages/ContentManagement";
import NotFound from "./pages/NotFound";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ptBR from "date-fns/locale/pt-BR";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gerenciamento" element={<ContentManagement />} />
          <Route path="/usuarios" element={<UserManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
