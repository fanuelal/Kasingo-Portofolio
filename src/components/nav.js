import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from "react-router-dom";
import { userAcountobj } from './loginContainer';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
export class Nav extends Component {
  render() {
    return (
      <div>        
      <nav >
      <h1>KASINGO</h1>
       
    <ul>
    <li className='home'><Link style={{ textDecoration: 'none', color: 'white'}} to='/'><HomeRoundedIcon sx={{
      lineHeight: 0,
      marginTop: -0.5,
      marginLeft: -1,
      position: 'absolute',
    }}/> &nbsp; Home</Link></li>
    <li className='balance'><Link style={{ textDecoration: 'none', color: 'white'}} to='/payment'>
      <PaidRoundedIcon 
      sx={{position: 'absolute',
          lineHeight: 0,
          marginLeft: -1,
          marginTop: -0.5,}}/>&nbsp; {userAcountobj.accountBalance}</Link></li>
    <li className='account'><Link style={{ textDecoration: 'none', color: 'white'}} to='/accountProfile'>
      <PersonRoundedIcon
          sx={{position: 'absolute',
          lineHeight: 0,
          marginLeft: -2,
          marginTop: -0.5,}}/>&nbsp;{userAcountobj.userName}</Link></li></ul>
    </ nav></div>
    )
  }
}

export default Nav