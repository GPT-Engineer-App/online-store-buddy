import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Catalog from "./pages/Catalog.jsx";
import WhereToFindUs from "./pages/WhereToFindUs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/where-to-find-us" element={<WhereToFindUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;