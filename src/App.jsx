import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';


// service page
import Education from './pages/ServicePage/Education';
import Conservation from './pages/ServicePage/Conservation';
import Culture from './pages/ServicePage/CultureHaritage';
import Empowerment from './pages/ServicePage/WomenEmpowerment';
import Climate from './pages/ServicePage/Climate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Home />} />
        <Route path="/store" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/news" element={<Home />} />

        {/* Service page submenu route */}
        <Route path="/services/education" element={ <Education /> } />
        <Route path="/services/conservation" element={ <Conservation /> } />
        <Route path="/services/heritage" element={ <Culture /> } />
        <Route path='/services/empowerment' element={<Empowerment /> } />
        <Route path='/services/climate' element={<Climate /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;