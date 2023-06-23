import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout />} />
    </Routes>
    </>
  );
}

export default App;












/* 
  Libraries
emailJS
fortawesome svg icons / react fontawesome -> Icons
animate.css           ->  Animate objects && fonts
GSAP (trial version)  ->  More advanced animations
leaflet               ->  Using maps
loaders.css           ->  Loaders ... (lol)
react-router-dom

  Prettier

*/