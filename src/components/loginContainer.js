import React from 'react'
import { useState } from 'react'
import { auth } from '../utils/privateRoutes';
import '../styles/login.css';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { Socket } from 'socket.io-client';
import { Alert, AlertTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress'
import mdiPageNextOutline from '@mui/material/SvgIcon'
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
export var userAcountobj = {}
function LoginBox() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [userName, setUserName] = useState("")
  const navigate = useNavigate();
  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value)
  }
  const handleNextBtn = (event) => {
    event.preventDefault();
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('loginbtn').style.display = 'block';
    document.getElementById('verifyWait').style.display = 'block';
    document.getElementById('varification').style.display = 'block';
    document.getElementById('countryCodeId').style.display = 'none';
    document.getElementById('textFieldDivPhone').style.display = 'none';
    setTimeout(() => { document.getElementById('loginSucces').style.visibility = 'visible'; }, 1000)
    setTimeout(() => { document.getElementById('loginSucces').style.visibility = 'hidden'; }, 2000)
    Axios.post('http://localhost:9000/dbAuthentication/',
      { completePhone: countryCode + phone }).then((response) => {
        if (response.data[0]) {
          userAcountobj = response.data[0]
          console.log('LoginRes ' + userAcountobj.Loginresult)
        }
      }).catch((err) => {console.error('comeback soon' + err)})


  }
  const authenticate =  (event) => {
    event.preventDefault();
    if (userAcountobj.validCode === verificationCode) {
      console.log('correct verification code')
      if(userAcountobj.Loginresult === 1){ 
        auth.token = true
        navigate('/');
      }
      else{
        document.getElementById('varification').style.display = 'none'
        document.getElementById('loginbtn').style.display = 'none'
        document.getElementById('verifyWait').style.display = 'none'
        document.getElementById('finishBtn').style.display = 'block'
        document.getElementById('textFieldDivUser').style.display = 'block'
      }
    }

    else {
      let validCounter
      document.getElementById('WrongVerification').style.visibility = 'visible';
      validCounter++;
      console.log('invalid code ' + validCounter)
    }

  }
  const handleUserName = () => {
    console.log('userName and phone' + userName + ' ' + countryCode + phone)
    Axios.post("http://localhost:9000/userInfo/", 
    {userName: userName, completePhone: countryCode + phone}).then((response) => {
      console.log(response)
      if(response.data[0]){
        console.log(response)
        userAcountobj = response.data[0]
        auth.token = true
        navigate('/');
      }
    }).catch((err) => {console.error('failed to update' + err)})
  }
  return (
    <>
      <Alert severity='success' id="loginSucces">Verification sent</Alert>
      <div className='LoginHeader'>KASINGO</div>
      <div className='loginDiv'>

      <form onSubmit={authenticate}>
          <select className='contryCode'
            value={countryCode}
            onChange={handleCountryCodeChange}
            id='countryCodeId'>
            <option value="selectCountry">
              Select Country
            </option>
            <option value='+251'>
              <span role="img" aria-label="et">&#x1F1EA;&#x1F1F9; Ethiopia</span></option>
            <option value='+55'>
              <span role="img" aria-label="br"> &#x1F1E7;&#x1F1F7; Brazil
              </span>
            </option>
            <option value='+94'>
              <span role="img" aria-label="in"> &#x1F1EE;&#x1F1F3; India</span></option>
            <option value='+1'>
              <span role="img" aria-label="us"> &#x1F1FA;&#x1F1F8; US</span></option>
            <option value='+44'><span role="img" aria-label="uk"> &#x1F1E6;&#x1F1FA; UK</span></option>
          </select>

       <div id='textFieldDivPhone'>
          <TextField id="outlined-basic" label="Phone Number"
              sx={{
                width: 250,
                height: 20,
                color: 'success.main',
                marginLeft: 15,
                marginTop: 4,
                    }
              }
              variant="standard"
              className='phoneNumber'
              value={countryCode + phone}
              onChange={(event) => {
                setPhone(event.target.value.slice(countryCode.length))
                if(!isNaN(parseInt(phone))){
                  document.getElementById('outlined-basic').style.border = 'none'
                  
              }
                else if(isNaN(parseInt(phone))){
                    document.getElementById('outlined-basic').style.border = '2px solid red'
                }
                
                }
              }
              InputLabelProps={{ className: 'textFiled_lable' }}
              required
                        />
      </div>          


      <div id='textFieldDivUser'>
          <TextField id="outlined-basic" label="User Name"
              sx={{
                width: 250,
                height: 20,
                color: 'success.main',
                marginLeft: 10,
                marginTop: 4,
                    }
              }
              variant="standard"
              className='userName'
              value={ userName}
              onChange={(event) => {
                setUserName(event.target.value)
                }
              }
              InputLabelProps={{ className: 'textFiled_lable' }}
              />
      </div>          
          <p id='verifyWait'>Varification code</ p>
          <input type="text" id='varification' placeholder='xxxxx' required
            onChange={(event) => {
              setVerificationCode(event.target.value)
            }}

          />
          {/* <CircularProgress color="success" /> */}

          <button id='nextBtn' className='lgnBtns' onClick={handleNextBtn}>Next</button>
          <button id='loginbtn' className='lgnBtns' type='submit'>Verify</button>
          <button id='finishBtn' className='lgnBtns' type='submit' onClick={handleUserName}>Finish</button>
        </form>
      </div>
      {/* <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge> */}
      <Alert severity="error" id='WrongVerification'
        onClose={(e) => { document.getElementById('WrongVerification').style.display = 'none' }}>
        Incorrect Verification Code — check it out!</Alert>
    </>
  );
}

export default LoginBox