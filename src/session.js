import React, { useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Session(){
  /*<p className='newSess'>Click to Start a New Session</p>
        <button className="sessIcon" >+</button>*/
  const [sessionName, setSessionName] = useState("");
  const [sessionName1, setSessionName1] = useState([]);
  const [ids,setIds]=useState(0);
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(<button className='addBtn'>New Session</button>);

  const getTxt =(e)=>{
    setSessionName(e.target.value);
    console.log(e.target.value)
   }
   
  const deleteName=(e)=>{
    e.preventDefault();
    setIds(ids+1)
    setSessionName1([...sessionName1,{text:sessionName,key: ids}]);
    setSessionName("");
    setIcon(<button className='addBtn'>New Session</button>)
    setActive(!active)
    console.log(sessionName)
  }
  const toggIcon=()=>{
    setActive(!active);
    setIcon(!icon);
    console.log(icon)
  }
  const sessionNames =[sessionName1.map(ssnName => {
    return <div key={ssnName.key}><p className='ssnTxt'>{ssnName.text}</p></div>})][0];

  return (
    <div className='profile'>
        <p className='profName'>'s Profile</p>
        <p className='newSess'>Click to Start a New Session</p>
        <div className='sessContainer'>
        <div className='sessDiv' onClick={toggIcon}>{icon}</div>
          {active?(
          <>
          <div className='sessDiv2'>
        <input className='hiddName' name="hiddName" type="text" value={sessionName}onChange={getTxt}></input>
        <button className='submitBtn' onClick={deleteName}>Submit</button>
        </div>
        </>
        ):("")}
        </div>
         <div className='profileCont'>{sessionNames}</div>
        <Link to='home'>
      <button className="homeBtn">Test Your Memory!</button>
      </Link>
    </div>
  )
}

export default Session