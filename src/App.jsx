import React from 'react';
import './App.css';
import Header from './components/MainPage/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div >
      <Cart />
      <Header />
      <Menu />
    </div>
  );
}

export default App;
