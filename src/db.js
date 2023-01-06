import './App.css';
import {Link} from 'react-router-dom';
import React, { useState} from 'react';
import {useEffect} from 'react';


function DB(props){
//column_two will have underlined areas to input translations manually.... or, re-arrange everything, two input boxes
//on app.js, one with text, one translation, make everything underlined/drag and drop on db.js
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
   
   const preD1 = (event)=> {
    event.preventDefault();
   }

    let columntwo_Data = [
      {results:'apiresults'},
      {results:'apiresults'},
      {results:'apiresults'},
      {results:'apiresults'},
      {results:'apiresults'},
      {results:'apiresults'}
    ]
    let columntwo_Input = columntwo_Data.map(function(data, i){
      return <ol>{data.results}</ol>
    })
    /*<li value={i+1}></li>*/
    return(
   <div className='Database'>
    <form>
      <div className='db_Container'>
        <div className='column_one'>
       <p className='p_Text'>
        {props.trn}
        </p>
        </div>
        <button className='getTxt'onClick={preD1} ></button>
        <div className='column_two'>
          <p className='p_Text2'>
            {columntwo_Input}
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