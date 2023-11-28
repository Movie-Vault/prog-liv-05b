import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/Navbar';
// import MoviesSearch from './components/MoviesSearch';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import '/src/css/App.css'


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        {/* <MoviesSearch /> */}
        <div className="pages">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/aboutus" component={AboutUs} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App
