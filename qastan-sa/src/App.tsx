import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Oplossingen from "./pages/Oplossingen";
import Toepassingen from "./pages/Toepassingen";
import Over from "./pages/Over";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Partners from "./pages/Partners";
import Digitalisering from "./pages/Digitaliseren";
import Automatisering from "./pages/Automatiseren";
import Plannen from "./pages/Plannen";
import IT from "./pages/IT";
import Footer from "./components/Footer";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import Cookies from "./pages/Cookies";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Oplossingen" element={<Oplossingen />} />
        <Route path="/Toepassingen" element={<Toepassingen />} />
        <Route path="/Over" element={<Over />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Digitaliseren" element={<Digitalisering />} />
        <Route path="/Automatiseren" element={<Automatisering />} />
        <Route path="/Plannen" element={<Plannen />} />
        <Route path="/IT" element={<IT />} />
        <Route path="/AlgemeneVoorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/Cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
