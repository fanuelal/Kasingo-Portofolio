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
        <li className='home'>Home</li>
        <li className='balance'>0$</li>
        <li className='onlineCounter'>Online Players 10</li>
        <li className='account'>Account</li>
    </ul>
    </ nav></div>
    )
  }
}

export default Nav