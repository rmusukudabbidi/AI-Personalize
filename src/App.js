import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/"  element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/taxonomy" element={<Taxonomy />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
