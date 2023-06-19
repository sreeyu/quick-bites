import React, { Fragment } from 'react';
import './App.css';
import Header from './components/MainPage/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment >
      <Cart />
      <Header />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
}

export default App;
