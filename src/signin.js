import './App.css';
import {Link} from 'react-router-dom';
import React, { useState} from 'react';




function SignIn(props){
   /*SignIn Portion*/
  
  const [names2, setNames2] = useState(props.names);
  const getTxt1 =(e)=>{
    e.preventDefault();
    props.setNames(e.target.value);
   }
   
   const clrTxt=()=>{
    setNames2("");
   }

   
        return(
       <div className='Sign-In'>
        <header className='signinText'>Hi! Welcome to Lokum! What's your name?</header>
        <form>
        <div className='signForm'>
          <div className='formDiv'>
         <input type="text" className='enterData' name='userName' value={props.names2} onChange={getTxt1}></input>
         </div>
         <Link to='Session'>
         <button className='signBtn' onClick={clrTxt}>Select Your Name</button>
         </Link>
         </div>
        </form>
       </div>
        );
    }
    
      export default SignIn;
    
    
     