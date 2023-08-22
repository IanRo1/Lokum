import React, { useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Session(){
  const [sessionName, setSessionName] = useState("");


  return (
    <div className='profile'>
        <p className='profName'>'s Profile</p>
        <div className='sessContainer'>
        <p className='newSess'>Click to Start a New Session</p>
        <div className="sessIcon">+</div>
        </div>
        <div className='profileCont'></div>
        <Link to='home'>
      <button className="homeBtn">Test Your Memory!</button>
      </Link>
    </div>
  )
}

export default Session