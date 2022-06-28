// import { response } from 'express';
import React from 'react'
import { useState } from 'react'
import {setAuth, getAuth} from '../utils/privateRoutes';
import '../styles/login.css';
import Axios from 'axios';

function LoginBox() {
    const [phone, setPhone] =  useState("");
    const [countryCode, setCountryCode] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const handleCountryCodeChange = (event) => {
      setCountryCode(event.target.value)
    }
    const handlePhoneChange = (event) => {
         setPhone(event.target.value)
    }
    const authenticate = () => {
      Axios.post('http://localhost:9000/dbAuthentication/', 
      {completePhone: countryCode + phone})
      .then((res) => {
        res.text();
        console.log(res)
        // if(response.data.message) setLoginStatus(response.data.message)
        // else{
        //   setLoginStatus(response.data[0].phonNumber)
        // } 
      })
    }

    return (
      <>
        <div className='LoginHeader'>KASINGO <h1>{loginStatus}</h1></div>
        <div className='loginDiv'>

        <form onSubmit={authenticate}>
                <span className='lablePhone'>Phone Number</span>
                <select className='contryCode' 
                  value={countryCode} 
                  onChange={handleCountryCodeChange} 
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
                value={countryCode + phone}
                onChange={(event) => {
                  setPhone(event.target.value.slice(countryCode.length))}}
                required
                />
                <input type="text" className='varification' placeholder = 'xxxxx'/>
                <p className='verifyWait'>Waiting for 5 min</ p>
            <button className='nextBtn' type='submit'>Next</button>
            </form>
        </div>
        </>
    );
  }

export default LoginBox