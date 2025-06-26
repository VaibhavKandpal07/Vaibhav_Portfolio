// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BackgroundDots from "./components/BackgroundDots"; // dots background
import AnimatedGrid from "./components/AnimatedGrid"; // new background for projects
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
function AppContent() {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      {/* Show dots on all pages EXCEPT Projects */}
      {!isProjectsPage && <BackgroundDots />}

      {/* Show grid ONLY on Projects */}
      {isProjectsPage && <AnimatedGrid />}

      <div className="relative z-10">
       
        <Routes>
          <Route path="/" element={<><Hero /><Footer /></>} />
          <Route path="/about" element={ <About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
       
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
