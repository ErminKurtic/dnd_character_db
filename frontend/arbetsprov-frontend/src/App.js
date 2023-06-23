import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddChar from "./components/characters/AddChar";
import EditChar from "./components/characters/EditChar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcharacter" element={<AddChar />} />
          <Route exact path="/editcharacter/:id" element={<EditChar />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
