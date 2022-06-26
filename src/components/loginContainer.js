import React, { Component } from 'react'
import '../styles/login.css';
import LoginHeader from './header';

export class LoginBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         countryCode: '',
         phone: '',
         value: ''
         
      }

    }
    handleCountryCodeChange = (event) => {
      this.setState({
        countryCode: event.target.value
      })
    }
    handlePhoneChange = (event) => {
      this.setState({
        phone: event.target.value
      })
    }
    handlePhoneChange(event) {    this.setState({value: event.target.value});  }
  render() {
    return (
      <>
        <LoginHeader />
        <div className='loginDiv'>
        <form >
            <lable>
                <span className='lablePhone'>Phone Number</span>
                <select className='contryCode' 
                  value={this.state.countryCode} 
                  onChange={this.handleCountryCodeChange} 
                  id='countryCodeId'>
                <option value="selectCountry">
                        Select Country
                </option>
                <option value='+251'> &#x1F1EA;&#x1F1F9; Ethiopia</option>
                <option value='+55'> &#x1F1E7;&#x1F1F7; Brazil</option>
                <option value='+94'> &#x1F1EE;&#x1F1F3; India</option>
                <option value='+1'> &#x1F1FA;&#x1F1F8; US</option>
                <option value='+44'> &#x1F1E6;&#x1F1FA; UK</option>
            </select>
            <input type='tel' 
                className='phoneNumber' 
                id='telNum' 
                placeholder='000-000-000'  
                value={this.state.countryCode + this.state.value}
                onchange={this.handlePhoneChange}
                required
                />
                <input type="text" className='varification' placeholder='xxxxx'/>
                <p className='verifyWait'>Waiting for 5 min</ p>
            </lable>
            <button className='nextBtn' onpress={this.action}>Next</button>
                    </form>
        </div>
        </>
    );
  }
}

export default LoginBox