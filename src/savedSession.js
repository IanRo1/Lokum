import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';


function savedSess(props){
    const sessionNames =[props.sessionName1.map(ssnName => {
        return <div key={ssnName.key} className='ssnTxt'>{ssnName.text}</div>})][0];

    return(
     <div className='savedDB'>
        <div className='sDB1'>
            {sessionNames}
        </div>
     <Link to='session'><button className='return'></button></Link>
     </div>
    )
}


export default savedSess