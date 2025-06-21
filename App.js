// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './pages/index';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Mangas from './pages/Mangas';
import Manhwas from './pages/Manhwas';
import MyList from './pages/MyList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mangas" element={<Mangas />} />
        <Route path="/manhwas" element={<Manhwas />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </Router>
  );
}

export default App;