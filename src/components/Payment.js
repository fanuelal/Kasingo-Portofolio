import React, { Component } from 'react'
import Nav from './nav'
import '../styles/main.css'
export class Payment extends Component {
  handleClickcpy = (event) => {
    const cpiedval = document.getElementById('merchId');
    const notifier = document.getElementById('cpidNotifier');
    cpiedval.select();
    navigator.clipboard.writeText(cpiedval.value);
    notifier.style.visibility = 'visible';
    setTimeout(() => notifier.style.visibility = 'hidden', 1000);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className='balanceContainer'>
          <div className='paymentWithdraw'>
            <h2>Withdraw your balance</h2>
            <select className='PayMethodSelection'>
              <option>TeleBirr</option>
              <option>Bitcoin</option>
              <option>Amole</option>
            </ select>
            <input type='text' className='paymentAddress' placeholder='address here' />
            <button className='reqBtn'>Send</button>
          </div>
          <div className='AddBalance'>
            <h2>Add Balance</h2>
            <lable>TeleBirr Merchant Id</lable><input type='text' name='paymentAddress' value='X2D49HWKRLS' id='merchId' /><button onClick={this.handleClickcpy}>Copy</button><lable id='cpidNotifier'>Copied</lable>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment