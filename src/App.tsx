import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import Favorites from "./pages/Favorites"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/favorites" element={<Favorites />} /> 
      </Routes>
    </Router>
  );
}

export default App;
