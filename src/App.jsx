import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Dinosaurs from './pages/Dinosaurs';
import Museum from './pages/Museum';
import Merch from './pages/Merch';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinosaurs" element={<Dinosaurs />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
