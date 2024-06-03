import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './components/PageAccueil';
import PageProjet from './components/PageProjet';
import Contact from './components/Contact';
import PageBTS from './components/PageBTS';
import VeilleNumerique from './components/Veille';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/PageBTS' element={<PageBTS />} />
          <Route path='/PageProjet' element={<PageProjet />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Veille' element={<VeilleNumerique />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
