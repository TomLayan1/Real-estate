import React from 'react';
import { RealEstateContextProvider } from './Context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <RealEstateContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/property/:ExternalID'}  />
        </Routes>
      </BrowserRouter>
    </RealEstateContextProvider>
  );
}

export default App;
