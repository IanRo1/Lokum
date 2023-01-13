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

 let columntwo_Data = [
  {results:'apiresults1',id:1},
  {results:'apiresults2',id:1},
  {results:'apiresults3',id:1},
  {results:'apiresults4',id:1},
  {results:'apiresults5',id:1},
  {results:'apiresults6',id:1}
]
 const drop = e =>{
  e.preventDefault();
  const card_id = e.dataTransfer.getData('card_id');
  const card =document.getElementById(card_id);
  card.style.display = 'block';
  e.target.appendChild(card);
 }
 
 const dragOver = e =>{
  e.preventDefault();
 }
 const dragOver1 = e =>{
  e.preventDefault();
  e.stopPropagation();}

 const dragStart = e =>{
  const target = e.target;
  e.dataTransfer.setData('card_id', target.id );
  setTimeout(() => {
    target.style.display="none";
  },0 );
 }

   const preD = (event)=> {
    event.preventDefault();
   }
   
   const preD1 = (event)=> {
    event.preventDefault();
   }

    let columntwo_Input = columntwo_Data.map(function(data){
      return <ol
      id={data.id}
          className='api'
          draggable='true'
          onDragStart={dragStart}
          onDragOver={dragOver1} 
          >
        {data.results}
        </ol>
    })

    /*<li value={i+1}></li> draggable onDragOver={(e)=>this.onDragOver(e)}*/
  
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
          <p 
          onDrop={drop}
          draggable = 'true'
          onDragOver={dragOver}
          className='p_Text2'>
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