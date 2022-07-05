import React from 'react'
import { useNavigate } from 'react-router'
import '../styles/main.css'
import Nav from './nav'
export function Home () {
  const navigate = useNavigate();
    return (
      <div>
        <Nav />
        <div className='homeMain'>
          <h2>Rules </h2>
          <p>1 A bingo Card contains 24 numbered spaces. <br /><br />
          2 and one free space (blank),with which you play BINGO on each card. <br/><br />
          3 The numbers are assigned at random in the I column between 16 and 30.<br /><br />
          4 The numbers in the B column are between 1 and 15.
          </p>
          <button className='playBtn' onClick={() => navigate('/playingZone')}>Start</button>
        </div>
        <div className='onlinePlayStatus'>
        <div className='bgdBalance'></div>
        <span className='onlineCounter'>Online Players 10</span>
        </div>
      </div>
      

    )
  }

export default Home