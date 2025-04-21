import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  const [funFactIndex, setFunFactIndex] = useState(0);

  const funFacts = [
    "The word 'dinosaur' means 'terrible lizard' in Greek.",
    "Dinosaurs lived on all continents, including Antarctica.",
    "The smallest dinosaur was about the size of a chicken.",
    "The largest dinosaur, Argentinosaurus, could weigh up to 100 tons.",
    "Birds are the only living descendants of dinosaurs.",
    "The longest dinosaur name is Micropachycephalosaurus.",
    "Nyasasaurus may be the earliest known dinosaur, dating to the late Anisian stage, about 243 million years ago, 10 to 15 million years older than any previously described dinosaur"
  ];

  const toggleFunFact = () => setShowFunFact(!showFunFact);
  const getNextFunFact = () => setFunFactIndex(i => (i + 1) % funFacts.length);

  return (
    <div className="home-container">
      <h1 className="page-title">Welcome to Dinoworld!</h1>

      <div className="welcome-message">
        <p>
          Discover the fascinating world of dinosaurs at Dinoworld. Learn about different species,
          view amazing media, and even shop for dinosaur merchandise!
        </p>
        <button className="filter-button" onClick={toggleFunFact}>
          {showFunFact ? "Hide Fun Fact" : "Show Fun Fact"}
        </button>
        {showFunFact && (
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#E0F7FA', borderRadius: '5px' }}>
            <p><strong>Fun Fact:</strong> {funFacts[funFactIndex]}</p>
            <button className="filter-button" onClick={getNextFunFact}>Next Fun Fact</button>
          </div>
        )}
      </div>

      <div>
        <h2>Explore Our Sections</h2>
        <div className="dino-list">
          <div className="dino-card">
            <h3>Dinosaur Catalog</h3>
            <p>Browse our extensive collection of dinosaur species.</p>
            <Link to="/dinosaurs" className="nav-link">Explore Dinosaurs</Link>
          </div>
          <div className="dino-card">
            <h3>Dinosaur Media</h3>
            <p>Check out amazing dinosaur images and videos.</p>
            <Link to="/media" className="nav-link">View Media</Link>
          </div>
          <div className="dino-card">
            <h3>Dino Merch</h3>
            <p>Shop for cool dinosaur themed merchandise.</p>
            <Link to="/merch" className="nav-link">Shop Now</Link>
          </div>
          <div className="dino-card">
            <h3>Contact Us</h3>
            <p>Have questions? We'd love to hear from you!</p>
            <Link to="/contact" className="nav-link">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
