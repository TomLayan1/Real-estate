import React from 'react';
import { RealEstateContextProvider } from './Context/Context';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <RealEstateContextProvider>
      <Home />
    </RealEstateContextProvider>
  );
}

export default App;
