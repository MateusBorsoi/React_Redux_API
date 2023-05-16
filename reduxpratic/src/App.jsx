import "./App.css";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Users from "./routes/Users";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Empresas from "./routes/Empresas";
import CadastraEmpresa from "./routes/CadastraEmpresa";

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/empresas" element={<Empresas />}></Route>
          <Route path="/registrarEmpresa" element={<CadastraEmpresa />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
