import React, { useState } from 'react';
import './App.css';
import Header from './components/MainPage/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false)

  const getCartModal = () =>{
    setShowCart(true);
  }

  const getCancelCart = () => {
    setShowCart(false);
  }
  
  return (
    <CartProvider >
      {showCart && <Cart onCancel={getCancelCart} />}
      <Header onCart={getCartModal} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
