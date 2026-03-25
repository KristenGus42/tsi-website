import { Routes, Route } from 'react-router-dom';

// Import Page Components 
import AboutUs from './components/AboutUs'
import OurApproach from './components/OurApproach'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Product from './components/Product'
import Home from './components/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="about-us" element={<AboutUs />} />
        <Route index element={<Home />} />
        <Route path="publications" element={<Publications />} />
        <Route path="contact" element={<Contact/>} />

      </Routes>
    </div>
  )
}

export default App;