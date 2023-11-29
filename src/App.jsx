import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import '/src/css/App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/aboutus" component={AboutUs} />
      </Routes>
    </Router>
  );
}

export default App;
