import React, { useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Session(){
  const [sessionName, setSessionName] = useState("");
  const [hiddName, sethiddName] = useState([]);
  const [hiddButton, sethiddButton] = useState([]);

  const createName=()=>{
    sethiddName(<input className='hiddName' type="text" id='0'></input>)
    sethiddButton(<button className='submitBtn' id='0' onClick={deleteName}>Submit</button>)
  }

  const deleteName=()=>{
    sethiddName(hiddName.filter((x) => x.id === '0'))
    sethiddButton(hiddButton.filter((x) =>x.id === '0'))
  }

  return (
    <div className='profile'>
        <p className='profName'>'s Profile</p>
        <div className='sessContainer'>
        <p className='newSess'>Click to Start a New Session</p>
        <button className="sessIcon" onClick={createName}>+</button>
        <div className='secretTxt'>{hiddName}{hiddButton}</div>
        </div>
        <div className='profileCont'></div>
        <Link to='home'>
      <button className="homeBtn">Test Your Memory!</button>
      </Link>
    </div>
  )
}

export default Session