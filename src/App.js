import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom';
import './styles/main.css'
import LoginBox from './components/loginContainer';
import Home from './components/Home';
import PlayingZone from './components/PlayingZone';
import Payment from './components/Payment';
import AccountProfile from './components/accountProfile';
import ProtectedRoutes from './utils/privateRoutes';
// import { useState } from 'react';
class App extends Component {
render (){
return (

    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/" exact/>
          <Route path='/playingZone' element={<PlayingZone />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/accountProfile' element={<AccountProfile />} />
          <Route path='*' element={<p className='pageNAvailable'>There is No page here: 404!</p>}></Route>
        </Route>
        <Route path='/login' element={<LoginBox />} />
      </Routes>
    </Router>


    //   //<Payment />
    // <div className='body'>
    //     <LoginHeader />
    //     <LoginBox />
    //     </div>

  );
}
}

export default App;
