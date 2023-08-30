import React, { useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Session(){
  /*<p className='newSess'>Click to Start a New Session</p>
        <button className="sessIcon" >+</button>*/
  const [sessionName, setSessionName] = useState("");
  const [sessionName1, setSessionName1] = useState([]);
  const [ids,setIds]=useState(0);

  const getTxt =(e)=>{
    setSessionName(e.target.value);
    console.log(e.target.value)
   }
   
  const deleteName=(e)=>{
    e.preventDefault();
    setIds(ids+1)
    setSessionName1([...sessionName1,{text:sessionName,key: ids}]);
    setSessionName("");
    console.log(sessionName)
  }
  const sessionNames =[sessionName1.map(ssnName => {
    return <div key={ssnName.key}>{ssnName.text}</div>})][0];

  return (
    <div className='profile'>
        <p className='profName'>'s Profile</p>
        <p className='newSess'>Click to Start a New Session</p>
        <div className='sessContainer'>
        <div className='sessDiv'>
        <input className='hiddName' name="hiddName" type="text" value={sessionName}onChange={getTxt}></input>
        <button className='submitBtn' onClick={deleteName}>Submit</button>
        </div>
        </div>
        <div className='profileCont'>{sessionNames}</div>
        <Link to='home'>
      <button className="homeBtn">Test Your Memory!</button>
      </Link>
    </div>
  )
}

export default Session