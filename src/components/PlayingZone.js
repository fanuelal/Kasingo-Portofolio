import React, { Component } from 'react'
import '../styles/main.css'
import Nav from './nav'
export class PlayingZone extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: Math.floor(1 + Math.random() * 74)
    }
  }

  handleClick = (event) => {
    document.getElementById(event.currentTarget.id).style.background = '#2E133A';
    document.getElementById(event.currentTarget.id).style.color = 'white';
  }
  // handleLoad = () => {
  //   const rand = Math.Floor(1 + Math.random() * 74);
  //   console.log(rand);
  //   this.setValue(rand);
  // }



  render() {
    return (
      <div>
        <Nav />
        <div className='generatedNum' onLoad={this.handleLoad} onContextMenu={false}>{this.state.value}</ div>
        <table>
          <tr>
            <th className='bingoB'>B</th>
            <th className='bingoI'>I</th>
            <th className='bingoN'>N</th>
            <th className='bingoG'>G</th>
            <th className='bingoO'>O</th>
          </tr>
          <tr>
            <td onClick={this.handleClick} id='B1'>23</td>
            <td onClick={this.handleClick} id='I1'>43</td>
            <td onClick={this.handleClick} id='N1'>54</td>
            <td onClick={this.handleClick} id='G1'>67</td>
            <td onClick={this.handleClick} id='O1'>5</td>
          </tr>
          <tr>
            <td onClick={this.handleClick} id='B2'>45</td>
            <td onClick={this.handleClick} id='I2'>67</td>
            <td onClick={this.handleClick} id='N2'>5</td>
            <td onClick={this.handleClick} id='G2'>65</td>
            <td onClick={this.handleClick} id='O2'>12</td>
          </tr>
          <tr>
            <td onClick={this.handleClick} id='B3'>47</td>
            <td onClick={this.handleClick} id='I3'>74</td>
            <td onClick={this.handleClick} id='N3' >Free</td>
            <td onClick={this.handleClick} id='G3'>67</td>
            <td onClick={this.handleClick} id='O3'>16</td>
          </tr>
          <tr>
            <td onClick={this.handleClick} id='B4'>3</td>
            <td onClick={this.handleClick} id='I4'>67</td>
            <td onClick={this.handleClick} id='N4'>33</td>
            <td onClick={this.handleClick} id='G4'>56</td>
            <td onClick={this.handleClick} id='O4'>9</td>
          </tr>
          <tr>
            <td onClick={this.handleClick} id='B5'>22</td>
            <td onClick={this.handleClick} id='I5'>4</td>
            <td onClick={this.handleClick} id='N5'>23</td>
            <td onClick={this.handleClick} id='G5'>67</td>
            <td onClick={this.handleClick} id='O5'>48</td>
          </tr>
        </table>
        <button className='bingoBtn'>Bingo</button>
      </div>
    )
  }
}

export default PlayingZone;