import React from 'react';
import { Navbar, Footer } from './components';
import{BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';





function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
