import React from 'react'

import GlobalStyle from './GlobalStyle.js';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
