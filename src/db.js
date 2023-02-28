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

  //Match Ids with input information in home.js

 /* <button className='getTxt'onClick={preD1} ></button> swapItems(dragStartIndex, dragEndIndex) in drop  const [highlightedText, setHighlightedText] = useState('');
  useEffect(() => {
    const saveSelection = () => {
      setHighlightedText(window.getSelection().toString());
    };
    document.addEventListener('mouseup', saveSelection);
    return () => document.removeEventListener('mouseup', saveSelection);
 },[]);
  let columntwo_Data = [
  {results:'apiresults1/',id:0},
  {results:'apiresults2/',id:1},
  {results:'apiresults3/',id:2},
  {results:'apiresults4/',id:3},
  {results:'apiresults5/',id:4},
  {results:'apiresults6/',id:5}
]
const drop = e =>{
  e.preventDefault();
  const card_id = e.dataTransfer.getData('card_id');
  const card = document.getElementById(card_id);
  card.style.display = 'block';
  e.target.appendChild(card);
 } const dragOver = e =>{
  e.preventDefault();
 }
 const dragOver1 = (e) =>{
  e.stopPropagation();
}

 const dragStart = e =>{
  e.dataTransfer.setData('card_id', e.target.id );
  setTimeout(() => {
    e.target.style.display="none";
  },0 );
 } const preD = (event)=> {
    event.preventDefault();
   }
   const preD1 = (event)=> {
    event.preventDefault();
   }
    /*<li value={i+1}></li> draggable onDragOver={(e)=>this.onDragOver(e)} <div className='translator'>
          <textarea id='for_lang' className='for_lang'rows="4" cols="15" onMouseDown={preD} value={highlightedText} onChange={DB}></textarea>
          <textarea id='Nat_lang'className='Nat_lang'rows="4" cols="15" onMouseDown={preD}></textarea>
        </div>*/
