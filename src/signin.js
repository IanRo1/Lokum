import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function SignIn(){
   
        return(
       <div className='Sign-In'>
        <header className='signinText'>Please Login, SignUp for An Account, or Continue as a Guest</header>
        <form>
        <div className='signForm'>
          <div className='formDiv'>
          <label className='label'>Log-In:</label>
         <input type="text" className='enterData' name='userName'></input>
         </div>
         <div className='formDiv2'>
         <label className='label'>E-Mail:</label>
         <input type="text" className='enterData' name='userName'></input>
         </div>
         <Link to='Signup'>
         <button className='signBtn'>Sign Up!</button>
         </Link>
         </div>
         <div className='signBtns'>
         <Link to='Session'>
         <button className='guestBtn'>Continue As Guest</button>
         </Link>
         </div>
        </form>
       </div>
        );
    }
    
      export default SignIn;
    
    
     