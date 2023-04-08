import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import NotFound from './components/NotFound';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
