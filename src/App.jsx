import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Home from './assets/Components/Home';
import Coins from './assets/Components/Coins';
import Exchanges from './assets/Components/Exchanges';
import CoinDetails from './assets/Components/CoinDetails';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/> }/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App

