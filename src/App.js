import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Home, About, Services, Teams, Contact } from './components'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/our_teams' element={<Teams />} />
        <Route path='/contact_us' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// Created by: Russel M. Aniel
