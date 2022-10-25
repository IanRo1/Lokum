import './App.css';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import {useEffect} from 'react';


function DB(props){

  const [highlightedText, setHighlightedText] = useState('');
  useEffect(() => {
    const saveSelection = () => {
      setHighlightedText(window.getSelection().toString());
    };
    document.addEventListener('mouseup', saveSelection);
    return () => document.removeEventListener('mouseup', saveSelection);
 },[]);
   const preD = (event)=> {
    event.preventDefault();
   }
   
    return(
   <div className='Database'>
    <form>
      <div className='db_Container'>
        <div className='column_one'>
       <p>
        {props.trn}
        </p>
        </div>
        <div className='column_two'>
          <p>
        </p>
       </div>
      </div>
      <div className='Btn2'>
    <Link to='Cards'>
      <button className="dbBtn">Test Your Memory!</button>
      </Link>
      </div>
    </form>
    <div className='translator'>
          <textarea id='for_lang' className='for_lang'rows="4" cols="15" onMouseDown={preD} value={highlightedText} onChange={DB}></textarea>
          <textarea id='Nat_lang'className='Nat_lang'rows="4" cols="15" onMouseDown={preD}></textarea>
        </div>
   </div>
    );
}

  export default DB;