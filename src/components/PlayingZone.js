import React, { useEffect, useState } from 'react'
import '../styles/main.css'
import Nav from './nav'
import Axios from 'axios';
import { userAcountobj } from './loginContainer';
import io from 'socket.io-client'

const socket = io.connect()

export function PlayingZone() {
  
  const handleClick = (event) => {
    document.getElementById(event.currentTarget.id).style.background = '#2E133A';
    document.getElementById(event.currentTarget.id).style.color = 'white';
  }

  var [boardCells, setboardCells] = useState(Array(5).fill(Array(5).fill(null)))
  var [lotPlayer, setLotPlayer] = useState('Go')
  const borderGenerate = () => {
    Axios.post('http://localhost:9000/playLive', { userAcountobj }).then((response) => {
      setboardCells(response.data)
      console.log(boardCells)
    })
  }
  useEffect(() => {
    setInterval(() => {
      Axios.post('http://localhost:9000/lotpick', { userAcountobj })
        .then((response) => {
          console.log(response.data)
          setLotPlayer(response.data)
        })
    }, 4000)
  }, [])
  useEffect(() => {
    borderGenerate()
  }, []);


  const windChecker = () => {
    console.log("winner")
  }

  return (
    <div>
      <Nav />
      <div className='generatedNum' >{lotPlayer}</ div>
      <table>
        <tr>
          <th className='bingoB'>B</th>
          <th className='bingoI'>I</th>
          <th className='bingoN'>N</th>
          <th className='bingoG'>G</th>
          <th className='bingoO'>O</th>
        </tr>
        <tr>
          <td onClick={handleClick} id='B1'>{boardCells[0][0]}</td>
          <td onClick={handleClick} id='I1'>{boardCells[0][1]}</td>
          <td onClick={handleClick} id='N1'>{boardCells[0][2]}</td>
          <td onClick={handleClick} id='G1'>{boardCells[0][3]}</td>
          <td onClick={handleClick} id='O1'>{boardCells[0][4]}</td>
        </tr>
        <tr>
          <td onClick={handleClick} id='B2'>{boardCells[1][0]}</td>
          <td onClick={handleClick} id='I2'>{boardCells[1][1]}</td>
          <td onClick={handleClick} id='N2'>{boardCells[1][2]}</td>
          <td onClick={handleClick} id='G2'>{boardCells[1][3]}</td>
          <td onClick={handleClick} id='O2'>{boardCells[1][4]}</td>
        </tr>
        <tr>
          <td onClick={handleClick} id='B3'>{boardCells[2][0]}</td>
          <td onClick={handleClick} id='I3'>{boardCells[2][1]}</td>
          <td onClick={handleClick} id='N3' >Free</td>
          <td onClick={handleClick} id='G3'>{boardCells[2][3]}</td>
          <td onClick={handleClick} id='O3'>{boardCells[2][4]}</td>
        </tr>
        <tr>
          <td onClick={handleClick} id='B4'>{boardCells[3][0]}</td>
          <td onClick={handleClick} id='I4'>{boardCells[3][1]}</td>
          <td onClick={handleClick} id='N4'>{boardCells[3][2]}</td>
          <td onClick={handleClick} id='G4'>{boardCells[3][3]}</td>
          <td onClick={handleClick} id='O4'>{boardCells[3][4]}</td>
        </tr>
        <tr>
          <td onClick={handleClick} id='B5'>{boardCells[4][0]}</td>
          <td onClick={handleClick} id='I5'>{boardCells[4][1]}</td>
          <td onClick={handleClick} id='N5'>{boardCells[4][2]}</td>
          <td onClick={handleClick} id='G5'>{boardCells[4][3]}</td>
          <td onClick={handleClick} id='O5'>{boardCells[4][4]}</td>
        </tr>

      </table>
      <button className='bingoBtn' onClick={windChecker}>Bingo</button>
    </div>
  )
}

export default PlayingZone;