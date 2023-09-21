import React, { useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Session(props){
  /*<p className='newSess'>Click to Start a New Session</p>
        <button className="sessIcon" >+</button>*/
  const [ids,setIds]=useState(0);
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(<button className='addBtn'>New Session</button>);

  const getTxt =(e)=>{
    props.setSessionName(e.target.value);
    console.log(e.target.value)
   }
   
  const deleteName=(e)=>{
    e.preventDefault();
    setIds(ids+1)
    props.setSessionName1([...props.sessionName1,{text:props.sessionName,key: ids}]);
    props.setSessionName("");
    setIcon(<button className='addBtn'>New Session</button>)
    setActive(!active)
    
  }
  const toggIcon=()=>{
    setActive(!active);
    setIcon(!icon);
  }
  const sessionNames =[props.sessionName1.map(ssnName => {
    return <Link to='home'><div key={ssnName.key}><p className='ssnTxt'>{ssnName.text}</p></div></Link>})][0];

  return (
    <div className='profile'>
        <p className='profName'>'s Profile</p>
        <p className='newSess'>Click to Start a New Session</p>
        <div className='sessContainer'>
        <div className='sessDiv' onClick={toggIcon}>{icon}</div>
          {active?(
          <>
          <div className='sessDiv2'>
        <input className='hiddName' name="hiddName" type="text" value={props.sessionName}onChange={getTxt}></input>
        <button className='submitBtn' onClick={deleteName}>Submit</button>
        </div>
        </>
        ):("")}
        </div>
         <div className='profileCont'>{sessionNames}</div>
    </div>
  )
}

export default Session