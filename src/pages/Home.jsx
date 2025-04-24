import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import DinoQuiz from './DinoQuiz';

const SCIENTISTS = [
  {
    name: "Mary Anning",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/MaryAnning1840.png",
    facts: [
      "Pioneering English fossil collector and paleontologist.",
      "Discovered the first correctly identified ichthyosaur skeleton at age 12.",
      "Her discoveries contributed to important changes in scientific thinking about prehistoric life and the history of the Earth."
    ]
  },
  {
    name: "Richard Owen",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Sir_Richard_Owen_%281801-1892%29_%28cropped%29.jpg",
    facts: [
      "Coined the term 'Dinosauria' in 1842.",
      "British biologist, comparative anatomist and paleontologist.",
      "Instrumental in establishing the Natural History Museum, London."
    ]
  },
  {
    name: "Jack Horner",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/John_R._Horner_headshot%2C_2017.jpg",
    facts: [
      "American paleontologist known for his research on dinosaur growth and behavior.",
      "Technical adviser for the 'Jurassic Park' films.",
      "Discovered the first dinosaur eggs in the Western Hemisphere."
    ]
  },
  {
    name: "Yeh Hsiang-kʼuei (Yang Zhongjian)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Yang_Zhongjian_1.jpg",
    facts: [
      "Known as the 'Father of Chinese Vertebrate Paleontology.'",
      "Described several important Chinese dinosaur species.",
      "Instrumental in the development of paleontology in China."
    ]
  },
  {
    name: "Barnum Brown",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/BarnumBrown1920.jpg",
    facts: [
      "Discovered the first partial skeleton of Tyrannosaurus rex.",
      "American fossil hunter and paleontologist.",
      "Known for extensive dinosaur excavations across North America."
    ]
  },
  {
    name: "Othniel Charles Marsh",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Othniel_Charles_Marsh_1874.jpeg",
    facts: [
      "One of the leading figures in the Bone Wars.",
      "Discovered and named dozens of dinosaur species.",
      "First professor of paleontology in the United States."
    ]
  },
  {
    name: "Edward Drinker Cope",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Edward_Drinker_Cope_cph.3a44105.jpg",
    facts: [
      "Rival of Othniel Charles Marsh in the Bone Wars.",
      "Discovered over a thousand fossil species.",
      "Made significant contributions to the study of vertebrate paleontology."
    ]
  },
  {
    name: "Paul Sereno",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Paul_sereno.jpg",
    facts: [
      "Modern paleontologist known for numerous dinosaur discoveries in Africa and Asia.",
      "Founded Project Exploration to encourage kids in science.",
      "Discovered several new dinosaur genera."
    ]
  },
  {
    name: "Peter Dodson",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Peter_Dodson_at_Penn_State_University_2011c.jpg",
    facts: [
      "Expert on dinosaur eggs and nesting behaviors.",
      "Professor of vertebrate paleontology.",
      "Worked extensively on ceratopsian dinosaurs."
    ]
  },
  {
    name: "Zofia Kielan-Jaworowska",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Zofia_Kielan-Jaworowska_2013.jpg",
    facts: [
      "Pioneering Polish paleontologist.",
      "Led expeditions to the Gobi Desert uncovering important vertebrate fossils.",
      "Contributed to the understanding of mammal-like reptiles."
    ]
  }
];

const ScientistCard = ({ scientist, expanded, onClick }) => (
  <div className="scientist-card" tabIndex={0} onClick={onClick} onKeyPress={e => { if (e.key === 'Enter') onClick(); }}>
    <img src={scientist.image} alt={scientist.name} className="scientist-img" />
    <h4 className="scientist-name">{scientist.name}</h4>
    {expanded &&
      <ul className="scientist-facts">
        {scientist.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    }
  </div>
);

const Home = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  const [funFactIndex, setFunFactIndex] = useState(0);
  const [expandedScientist, setExpandedScientist] = useState(null);
  const funFacts = [
    "The word 'dinosaur' means 'terrible lizard' in Greek.",
    "Dinosaurs lived on all continents, including Antarctica.",
    "The smallest dinosaur was about the size of a chicken.",
    "The largest dinosaur, Argentinosaurus, could weigh up to 100 tons.",
    "Birds are the only living descendants of dinosaurs.",
    "The longest dinosaur name is Micropachycephalosaurus.",
    "Nyasasaurus may be the earliest known dinosaur, dating to the late Anisian stage, about 243 million years ago, 10 to 15 million years older than any previously described dinosaur.",
    "Some dinosaurs had feathers, including the Velociraptor.",
    "Tyrannosaurus rex had a bite force of over 12,000 pounds.",
    "Some dinosaurs, like the Stegosaurus, had plates on their backs for protection and display.",
    "The Triceratops had three distinct facial horns and a large bony frill.",
    "The Brachiosaurus had a long neck and could reach heights of up to 40 feet.",
    "The Spinosaurus is believed to have been the largest carnivorous dinosaur.",
    "Some dinosaurs, like the Ankylosaurus, had armor plating for protection.",
    "The Pteranodon was not a dinosaur but a flying reptile that lived during the same time period.",
    "The Stegosaurus had a brain the size of a walnut.",
    "The Velociraptor was about the size of a turkey, not the large creature depicted in movies.",
    "Dinosaurs lived during the Mesozoic Era, which lasted about 180 million years.",
    "The first dinosaur fossils were discovered in the early 19th century.",
    "Some dinosaurs were herbivores, while others were carnivores.",
    "The name 'Tyrannosaurus rex' means 'tyrant lizard king'.",
    "The first dinosaur to be named was the Megalosaurus in 1824.",
    "The first dinosaur skeleton to be mounted in a museum was a Hadrosaurus in 1868.",
    "The largest dinosaur egg ever found was about the size of a basketball.",
    "Some dinosaurs, like the Parasaurolophus, had unique crests on their heads.",
    "The Iguanodon was one of the first dinosaurs to be named and described.",
    "The Allosaurus was a large carnivorous dinosaur that lived during the late Jurassic period.",
    "The Diplodocus had a long neck and tail, and could reach lengths of up to 85 feet.",
    "The Stegoceras was a small dinosaur with a thick skull and bony plates on its back.",
    "The Ankylosaurus was heavily armored and had a club-like tail for defense.",
    "The Plesiosaurus was a marine reptile that lived during the time of the dinosaurs.",
    "The Mosasaurus was a large marine reptile that lived during the late Cretaceous period.",
    "The Archaeopteryx is considered the first bird and had features of both dinosaurs and birds.",
    "The Therizinosaurus had long claws and is believed to have been a herbivore.",
    "The Giganotosaurus was one of the largest carnivorous dinosaurs, rivaling the T. rex.",
    "The Velociraptor is believed to have been a pack hunter.",
    "The Baryonyx was a fish-eating dinosaur with long claws and a crocodile-like snout.",
    "The Spinosaurus is believed to have been semi-aquatic, hunting both land and water prey.",
    "The Argentinosaurus is believed to have been the largest land animal ever.",
    "The Theropoda group includes all carnivorous dinosaurs, including the T. rex and Velociraptor.",
    "The Ornithischia group includes many herbivorous dinosaurs, such as the Stegosaurus and Triceratops.",
    "The Saurischia group includes the theropods and sauropodomorphs, which are the long-necked dinosaurs.",
    "The Hadrosauridae family includes the duck-billed dinosaurs, known for their unique crests and social behavior.",
    "The Ceratopsidae family includes the horned dinosaurs, such as the Triceratops and Styracosaurus.",
    "The Sauropod family includes the long-necked dinosaurs, such as the Brachiosaurus and Apatosaurus.",
    "The Theropod family includes the carnivorous dinosaurs, such as the T. rex and Velociraptor.",
    "The Stegosauridae family includes the plated dinosaurs, such as the Stegosaurus and Kentrosaurus.",
    "The Ankylosauridae family includes the armored dinosaurs, such as the Ankylosaurus and Euoplocephalus.",
    "The Pachycephalosauridae family includes the dome-headed dinosaurs, such as the Pachycephalosaurus and Stygimoloch.",
    "The Iguanodontia group includes the iguanodon-like dinosaurs, known for their thumb spikes and herbivorous diet.",
    "The Ornithomimosauria group includes the ostrich-like dinosaurs, known for their speed and agility.",
    "The Dromaeosauridae family includes the raptor-like dinosaurs, such as the Velociraptor and Deinonychus.",
    "The Troodontidae family includes the bird-like dinosaurs, known for their intelligence and unique features.",
    "The Therizinosauridae family includes the therizinosaur-like dinosaurs, known for their long claws and herbivorous diet.",
    "The Spinosauridae family includes the spinosaur-like dinosaurs, known for their crocodile-like features and semi-aquatic lifestyle.",
    "The Pterosauria group includes the flying reptiles that lived during the time of the dinosaurs.",
    "The Mosasauridae family includes the mosasaur-like reptiles, known for their size and marine adaptations.",
    "The Ichthyosauria group includes the ichthyosaur-like reptiles, known for their dolphin-like features and marine lifestyle.",
    "The Plesiosauria group includes the plesiosaur-like reptiles, known for their long necks and marine adaptations.",
    "The Dimorphodon was a pterosaur with a unique skull shape and large teeth.",
    "The Quetzalcoatlus was one of the largest pterosaurs, with a wingspan of up to 33 feet.",
    "The Pterodaustro was a pterosaur with long, filter-feeding teeth.",
    "The Rhamphorhynchus was a pterosaur with a long tail and sharp teeth.",
    "The Pterosauria group includes the flying reptiles that lived during the time of the dinosaurs."
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

      <div>
        <h2>Famous Paleontologists</h2>
        <div className="scientist-list">
          {SCIENTISTS.map((scientist, index) => (
            <ScientistCard
              key={index}
              scientist={scientist}
              expanded={expandedScientist === index}
              onClick={() => setExpandedScientist(expandedScientist === index ? null : index)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2>Discover Your Dinosaur Personality</h2>
        <DinoQuiz />
      </div>
    </div>
  );
};

export default Home;