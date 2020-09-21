import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import Login from './views/Login';

function App() {
  const [burger, setBurger] = useState(false);

  return (
    <div className='app'>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button
              className={burger ? 'x' : 'burger'}
              onClick={(e) => setBurger(!burger)}
            >
              {burger ? <p>X</p> : <p> &#9776;</p>}
            </button>
            <a href='index.html'>JuicyDreams</a>
          </div>
          <div className='header-links'>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign In</a>
          </div>
        </header>

        <main className='main'>
          <aside className={burger ? 'menu open' : 'menu'}>
            <h3>Categories</h3>
            <ul className='menuItems'>
              <li className='menuItem'>Juices</li>
              <li className='menuItem'>Bread</li>
              <li className='menuItem'>Kimchi</li>
            </ul>
          </aside>
          <div className='content'>
            <Route path='/products/:id' component={Product} />
            <Route exact path='/' component={Home} />
            <Route path='/cart/:id?' component={Cart} />
            <Route path='/login' component={Login} />
           
          </div>
        </main>
        <footer className='footer'>All right reserved.</footer>
      </div>
    </div>
  );
}

export default App;
