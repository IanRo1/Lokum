import React, { useState, useEffect} from 'react';
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

   useEffect(()=>{
    if(ids >= 6){
      setIcon(false)
      setIcon('Users can only make 6 profiles at a time')
      setActive(false)
    }
 },[ids])
   
  const deleteName=(e)=>{
    e.preventDefault();
    setIds(ids+1)
    props.setSessionName1([...props.sessionName1,{text:props.sessionName,key: ids}]);
    props.setSessionName("");
    setIcon(<button className='addBtn'>New Session</button>)
    setActive(!active)
    props.setSessActive(true)
    console.log(ids)
  }
  const toggIcon=()=>{
    setActive(!active);
    setIcon(!icon);
  }
  const sessionNames =[props.sessionName1.map(ssnName => {
    return <div key={ssnName.key} className='ssnTxt'>{ssnName.text}</div>})][0].slice(0,6);

  return (
    <div className='profile'>
        <p className='profName'>{props.names}'s Profile</p>
        <p className='newSess'>Click to Start and Name a New Session.</p>
        <div className='sessContainer'>
        <div className='sessDiv' onClick={toggIcon}>{icon}</div>
          {active?(
          <>
          <div className='sessDiv2'>
        <input className='hiddName' name="hiddName" type="text" value={props.sessionName}onChange={getTxt}></input>
        <button className='submitBtn' id='submitBtn' onClick={deleteName}>Submit</button>
        </div>
        </>
        ):("")}
        </div>
        <Link to='home'><div className='profileCont'>{sessionNames}</div></Link>
    </div>
  )
}

export default Session