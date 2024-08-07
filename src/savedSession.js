import './App.css';
import React, { useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


function SavedSess(props){
    const [sessIndex, setSessIndex]= useState(0);
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState(<Link to='session'><button className='return'>No Previous Saves Detected</button></Link>);

    useEffect(()=>{
        if(props.sessActive === true){
            setActive(true);
            setIcon(true)
        }
     },[active, icon])

    const sessionNames =[props.sessionName1.map(ssnName => {
        return <button className='ssnTxt'>{ssnName.text}</button>})][0];

    function prevSess(){
        setSessIndex(index =>{
            if(index === 0) return sessionNames.length -1
            return index -1
        })
    }
    function nextSess(){
        setSessIndex(index =>{
            if(index === sessionNames.length -1) return 0
            return index +1
        })
    }

    return(
     <div className='savedDB'>
        {icon}
        {active?(
          <>
        <div className='sDB1'>
        <Link to='session/home'>{sessionNames[sessIndex]}</Link>
        </div>
        <div className='sDB2'>
            <button className='arrLeft' onClick={prevSess}>arrow left</button>
            <Link to='session'><button className='sessBtn'>Session Lists</button></Link>
            <button className='arrRight' onClick={nextSess}>arrow right</button>
        </div>
        </>
        ):("")}
     </div>
    )
}


export default SavedSess