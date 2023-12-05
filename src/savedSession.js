import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';


function savedSess(props){

    return(
     <div className='savedDB'>
        <div className='sDB1'>
            {props.sessionName1}
        </div>
     <Link to='session'><button className='return'></button></Link>
     </div>
    )
}


export default savedSess