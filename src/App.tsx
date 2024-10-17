import './scss/App.css'
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import UndefinedPage from './pages/UndefinedPage';
import Home from './pages/Home';
import Cart from './pages/cart/Cart';
import CartEmpty from './pages/cart/CartEmpty';
import Header from './components/header/Header';
import PizzaPage from './pages/PizzaPage';

function App() {
  return (
    <section className='app-section'>
      <Routes>
        <Route path={'/'} element={
          <>
            <Header />
            <Home />
          </>}>
        </Route>

        <Route path={'/cart'} element={
          <>
            <Header />
            <Cart />
          </>}>
        </Route>

        <Route path={'/cart-empty'} element={
          <>
            <Header />
            <CartEmpty />
          </>}>
        </Route>

        <Route path={'/pizza-page/:id'} element={<PizzaPage />}></Route>

        <Route path={'*'} element={<UndefinedPage />}></Route>
      </Routes>
    </section>
  )
}

export default App



// для стрелочного функционального компонента юзаем React.FC
// для обычного функционального компонента юзаем React.ReactElement


// но при работе с React.ReactElement не работае подсказка при наведении (не показывает какой параметр какой тип)
// хотя с React.FC все работает