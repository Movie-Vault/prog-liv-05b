import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
// import MoviesSearch from './components/MoviesSearch';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
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
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/categories" component={Categories} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App
