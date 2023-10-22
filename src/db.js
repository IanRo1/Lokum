import './App.css';
import {Link} from 'react-router-dom';
import React from 'react';



function DB(props){
/*
  <div>
  <button className="dbBtn" onClick={saveSession}>Save Your Word List!</button>
  </div>
    const saveSession = ()=>{
      props.setProfiles(props.trn);
      props.setProfiles2(props.trn2)
    

   /*Bringing Display Input Values From App.JS*/
    return(
   <div className='Database'>
    <form>
      <div className='db_Container'>
        <div className='column_one'>
        <ol>
        {props.trn}
        </ol>
        </div>
        <div className='column_two' >
            <ol>
            {props.trn2}
            </ol>
       
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


 