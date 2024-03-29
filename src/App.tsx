
import "./assets/css/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";
import About from "./pages/about";
import Team from "./pages/team";
import AddHotel from "./pages/addHotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<AddHotel />} path="/add-hotel" />
        <Route element={<About />} path="/about-us" />
        <Route element={<Team />} path="/Team" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
