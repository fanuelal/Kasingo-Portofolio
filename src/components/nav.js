import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from "react-router-dom";
export class Nav extends Component {
  render() {
    return (
      <div>        
      <nav >
      <h1>KASINGO</h1>
      <div className='bgdBalance'></div> 
    <ul>
    <li className='home'><Link style={{ textDecoration: 'none', color: 'white'}} to='/'> Home</Link></li>
    <li className='balance'><Link style={{ textDecoration: 'none', color: 'white'}} to='/payment'>10$</Link></li>
    <li className='onlineCounter'>Online Players 10</li>
    <li className='account'><Link style={{ textDecoration: 'none', color: 'white'}} to='/accountProfile'>Account</Link></li>
    </ul>
    </ nav></div>
    )
  }
}

export default Nav