import React, { Component } from 'react'
import '../styles/login.css';

export class LoginBox extends Component {
  render() {
    return (
        <div className='loginDiv'>
        <form >

            <lable>
                <span className='lablePhone'>Phone Number</span>
                <select className='contryCode' onChange="valueSetter" id='countryCodeId'>
                <option value='selectCountry'>
                        Select Country
                </option>
                <option value='et'> &#x1F1EA;&#x1F1F9; Ethiopia</option>
                <option value='br'> &#x1F1E7;&#x1F1F7; Brazil</option>
                <option value='in'> &#x1F1EE;&#x1F1F3; India</option>
                <option value='us'> &#x1F1FA;&#x1F1F8; US</option>
                <option value='uk'> &#x1F1E6;&#x1F1FA; UK</option>
            </select>
            <input type='tel' className='phoneNumber' id='telNum' placeholder='000-000-000'></input>
            </lable>
            <button className='nextBtn'>Next</button>
                    </form>
        </div>
    );
  }
}

export default LoginBox