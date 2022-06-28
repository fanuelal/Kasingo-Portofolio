// import { response } from 'express';
import React, { Component } from 'react'
import '../styles/login.css';

export class LoginBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         countryCode: '',
         phone: '',
         value: '',
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
    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state.countryCode + this.state.phone);

      fetch('http://localhost:4000',{
        method: 'POST',
        body: JSON.stringify(this.state.value)
      }).then((response) => {
        console.log(response)
        return response.json();
      }).catch(err => console.log(err))
      event.preventDefault();
    }
  render() {
    return (
      <>
        <div className='LoginHeader'>KASINGO</div>
        <div className='loginDiv'>
        <form onSubmit={this.handleSubmit}>
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
                value={this.state.countryCode + this.state.phone}
                onChange={(event) => {this.setState(
                  {phone: event.target.value.slice(this.state.countryCode.length)})}}
                required
                />
                <input type="text" className='varification' placeholder = 'xxxxx'/>
                <p className='verifyWait'>Waiting for 5 min</ p>
            </lable>
            <button className='nextBtn' type='submit'>Next</button>
            </form>
        </div>
        </>
    );
  }
}

export default LoginBox