import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes,
  Route,
  Link,
  Switch,
  Navigate,
} from 'react-router-dom';
import './styles/main.css'
import LoginBox from './components/loginContainer';
import Home from './components/Home';
import PlayingZone from './components/PlayingZone';
import Payment from './components/Payment';
import Nav from './components/nav';
import AccountProfile from './components/accountProfile';
// import privateRoutes from './utils/privateRoutes'
// import { useState } from 'react';

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/playingZone' element={<PlayingZone />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/accountProfile' element={<AccountProfile />} />
          <Route path='/login' element={<LoginBox />}/>
          </Routes>
      </Router>


  //   //<Payment />
  // <div className='body'>
  //     <LoginHeader />
  //     <LoginBox />
  //     </div>

  );
}

export default App;
