import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/experience" element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
