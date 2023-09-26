import './App.css';
import React from 'react';


function SignUp(){
   
        return(
       <div className='signUp'>
        <form>
        <div className='signupForm'>
          <div className='formDiv3'>
          <label className='label'>Name:</label>
         <input type="text" className='enterData' name='userName'></input>
         </div>
         <div className='formDiv4'>
         <label className='label'>E-Mail:</label>
         <input type="text" className='enterData' name='userName'></input>
         </div>
         </div>
        </form>
       </div>
        );
    }
    
      export default SignUp;
    
    
     