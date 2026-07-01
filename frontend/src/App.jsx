import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;