import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import '../styles/main.css'
import Nav from './nav'
import io from 'socket.io-client'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// const socket = io.connect('http://localhost:9000/')
export function Home() {
  const [liveCounter, setLiveCounter] = useState(1)
  const navigate = useNavigate();
  // useEffect(() => {
  //   socket.on('counter', () => {
  //     console.log('Connected')
  //     // setLiveCounter(counter)
  //   })
  // }, [])
  return (
    <div>
      <Nav />
      <div className='homeMain'>
        <h2>Rules </h2>
        <p>1 A bingo Card contains 24 numbered spaces. <br /><br />
          2 And one free space (blank),with which you play BINGO on each card. <br /><br />
          3 The numbers are assigned at random in the I column between 16 and 30.<br /><br />
          4 The numbers in the B column are between 1 and 15.
        </p>
        <button className='playBtn' onClick={() => navigate('/playingZone')}>Start</button>
      </div>
      <div className='onlinePlayStatus'>
        <div className='bgdBalance'></div>
        <span className='onlineCounter'>Online Player {liveCounter}</span>
      </div>
    </div>


  )
}

export default Home