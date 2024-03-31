import { Route, Routes } from 'react-router-dom';
import './App.css';

import { assets } from './assets/menu.js';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
