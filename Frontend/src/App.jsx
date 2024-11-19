import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Register from "./Components/Register";
import CardPage from "./Components/CardPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/card/:id" element={<CardPage />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
