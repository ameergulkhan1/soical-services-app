import './App.css';
import Header from './Components/Header/Header';
import Landingpage from './Components/Landingpage/Landingpage';

// Pages
import Services from './Pages/SERVICES/Services';
import Blogs from './Pages/BLOGS/Blogs';
import Terms from './Pages/TERMS & CONDITIONS/TermConditions';
import Contact from './Pages/CONTACT US/Contact';
import LoginModal from './Components/modals/LoginModal';
import Reviews from './Components/Reviews/Reviews';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} /> 
      </Routes>
    </Router>
  );
}

export default App;
