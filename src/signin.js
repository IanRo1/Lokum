import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function SignIn(){
   
        return(
       <div className='Sign-In'>
        <header className='signinText'>Please Login, SignUp for An Account, or Continue as a Guest</header>
        <form>
        <div className='signForm'>
         <input type="text" className='enterName' name='userName'></input>
         <input type="text" className='enterEmail' name='userName'></input>
         </div>
       <Link to='signup'>
         <button className='signBtn'>Sign Up!</button>
         </Link>
         <Link to='session'>
         <button className='guestBtn'>Continue As Guest</button>
         </Link>
        </form>
       </div>
        );
    }
    
      export default SignIn;
    
    
     