import './App.css';
import React, { useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


function SavedSess(props){
    const [sessIndex, setSessIndex]= useState(0);
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState(<Link to='session'><button className='return'></button></Link>);

    useEffect(()=>{
        if(props.sessActive === true){
            setActive(true);
            setIcon(true)
        }
     },[active, icon])

    const sessionNames =[props.sessionName1.map(ssnName => {
        return <div className='ssnTxt'>{ssnName.text}</div>})][0];

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
        <Link to='session'>{sessionNames[sessIndex]}</Link>
            <button className='arrLeft' onClick={prevSess}>arrow left</button>
            <button className='arrRight' onClick={nextSess}>arrow right</button>
        </div>
        </>
        ):("")}
     </div>
    )
}


export default SavedSess