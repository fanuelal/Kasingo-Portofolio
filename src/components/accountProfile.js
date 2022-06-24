import React, { Component } from 'react'
import '../styles/main.css'
import Nav from '../components/nav'

export class accountProfile extends Component {
  render() {
    return (
<div>
<Nav />
<div className='accountDetails'>
<h2>Edit Profile</h2>
<div>
<p>User Name</p><br/>
<lable><span className='setPassSpan'>SetPassword</span>
<input type='password' id='twoStepassword' placeholder='New Password'/>
<input type='password' id='twoStepasswordConfirm' placeholder='Confirm Password'/></lable>
<button className='savebtn'>Save</button>
</div>
</div>
</div>
    )
  }
}

export default accountProfile;