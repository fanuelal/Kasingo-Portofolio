import React, { useContext } from 'react'
import { useState } from 'react'
import {auth} from '../utils/privateRoutes';
import '../styles/login.css';
import Axios from 'axios';
import { UserContext } from './userContex';
import { useNavigate } from 'react-router';
// import { use } from '../../api/routes/dbAuthentication';
export var userAcountobj = {}
function LoginBox() {
    // const navigate = useNavigate();
    // const location = useLocation();
    const [phone, setPhone] =  useState("");
    const [countryCode, setCountryCode] = useState("");
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleCountryCodeChange = (event) => {
      setCountryCode(event.target.value)
    }
    const setterUserVal = (value) => {
      setUser(value)
    }

    const authenticate = (event) => {
      event.preventDefault();
      Axios.post('http://localhost:9000/dbAuthentication/', 
      {completePhone: countryCode + phone}).then((response) => {
        if(response.data[0]){
              auth.token = true
               navigate('/');
              userAcountobj = response.data[0]
          console.log(userAcountobj)
        }
      })
    }

    return (
      <>
        <div className='LoginHeader'>KASINGO {}</div>
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