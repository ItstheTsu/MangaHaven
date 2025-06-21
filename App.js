// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './src/index';
import AboutUs from './src/AboutUs';
import Contact from './src/Contact';
import Mangas from './pages/Mangas';
import Manhwas from './pages/Manhwas';
import MyList from './src/MyList';

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