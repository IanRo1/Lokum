import './App.css';
import {Link} from 'react-router-dom';
import React, { useState} from 'react';



function DB(props){
   /*.match(/\b(\w+)\b/g) /\n.*\n|\S+/g*/
     
    return(
   <div className='Database'>
    <form>
      <div className='db_Container'>
        <div className='column_one'>
       <p className='p_Text'>
        <ol>
        {props.trn}
        </ol>
        </p>
        </div>
        <div className='column_two' >
          <p className='p_Text2'>
            <ol>
            {props.trn2}
            </ol>
        </p>
       </div>
      </div>
      <div className='Btn2'>
    <Link to='Cards'>
      <button className="dbBtn">Test Your Memory!</button>
      </Link>
      </div>
    </form>
   </div>
    );
}

  export default DB;


 