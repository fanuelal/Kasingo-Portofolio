import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from "react-router-dom";
import { userAcountobj } from './loginContainer';
export class Nav extends Component {
  render() {
    return (
      <div>        
      <nav >
      <h1>KASINGO</h1>
       
    <ul>
    <li className='home'><Link style={{ textDecoration: 'none', color: 'white'}} to='/'> Home</Link></li>
    <li className='balance'><Link style={{ textDecoration: 'none', color: 'white'}} to='/payment'>
      {userAcountobj.accountBalance}$</Link></li>
    <li className='account'><Link style={{ textDecoration: 'none', color: 'white'}} to='/accountProfile'>Account</Link></li>
    </ul>
    </ nav></div>
    )
  }
}

export default Nav