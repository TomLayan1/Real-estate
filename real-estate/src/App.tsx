import React from 'react';
import { RealEstateContextProvider } from './Context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Search from './Pages/Search/Search'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {

  
  return (
    <RealEstateContextProvider>
      <BrowserRouter>
        <Header />
        <Contact />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          {/* Pass the ExternalID as a URL parameter */}
          <Route path={'/property/:ExternalID'} element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RealEstateContextProvider>
  );
}

export default App;