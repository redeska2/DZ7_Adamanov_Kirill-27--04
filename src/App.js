import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  return (
    <Router>
      <div>
        
        <Header />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
