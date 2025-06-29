import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import VCFirms from './pages/VCFirms';
import Accelerators from './pages/Accelerators';
import Corporates from './pages/Corporates';
import Universities from './pages/Universities';
import ImpactOrganizations from './pages/ImpactOrganizations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/vc-firms" element={<VCFirms />} />
            <Route path="/accelerators" element={<Accelerators />} />
            <Route path="/corporates" element={<Corporates />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/impact-organizations" element={<ImpactOrganizations />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;