import { Routes, Route } from 'react-router-dom';

// Import Page Components 
import AboutUs from './components/AboutUs'
import OurApproach from './components/OurApproach'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Product from './components/Product'


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<AboutUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-approach" element={<OurApproach />} />
        <Route path="publications" element={<Publications />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="product" element={<Product/>} />

      </Routes>
    </div>
  )
}

export default App;