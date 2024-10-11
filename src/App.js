import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Content from './Components/Content';
import Taxonomy from './Components/Taxonomy';
import Team from './Components/Team';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes >
          <Route path="/AI-Personalize/"  element={<Home />} />
          <Route path="/AI-Personalize/content" element={<Content />} />
          <Route path="/AI-Personalize/taxonomy" element={<Taxonomy />} />
          <Route path="/AI-Personalize/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
