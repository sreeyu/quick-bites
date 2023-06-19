import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/MainPage/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(false)

  const getCartModal = () =>{
    setShowCart(true);
  }

  const getCancelCart = () => {
    setShowCart(false);
  }
  
  return (
    <Fragment >
      {showCart && <Cart onCancel={getCancelCart} />}
      <Header onCart={getCartModal} />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
}

export default App;
