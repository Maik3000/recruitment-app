import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Players from './pages/Players/Players';
import aboutUS from './pages/aboutUS/aboutUS';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div claseName = "App">
    <Router>
    <GlobalStyle />
      
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/players' component={Players} />
        <Route path='/aboutUS' component={aboutUS} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;
