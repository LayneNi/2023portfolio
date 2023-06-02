import * as React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/ProjectPage/Projects";
import Skills from "./Pages/Skills";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/HomePage/Home";
// import "./path/to/index.css";
import "./index.css"
function App() {
  return (
<>
      <Header />
      <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/ContactMe" element={<ContactMe />} />
    </Routes>
    </Router>

</>
  );
}

export default App;
