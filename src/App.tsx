import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Home from './components/Home/home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout />} >
        <Route index element={<Home />} />
      </Route>
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