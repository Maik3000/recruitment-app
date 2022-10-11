import React from 'react';
import { Navbar, Footer } from './components';
import{BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';
// ? import Services from './pages/Services/Services';





function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact component={ <Home/>} ></Route>

        <Route path='/pages/products' component={<Products/>} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
