import React from 'react';
import { RealEstateContextProvider } from './Context/Context';

function App() {
  return (
    <RealEstateContextProvider>
      <p>Hello World!</p>
    </RealEstateContextProvider>
  );
}

export default App;
