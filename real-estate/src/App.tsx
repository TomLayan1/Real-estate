import React from 'react';
import { RealEstateContextProvider } from './Context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Search from './Pages/Search/Search'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'

function App() {
  return (
    <RealEstateContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          {/* Pass the ExternalID as a URL parameter */}
          <Route path={'/property/:ExternalID'} element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </RealEstateContextProvider>
  );
}

export default App;