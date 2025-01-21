import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
  const [char,setChar] = useState('');

   /*Saving Values in Input Field into State, to Be Transferred To inputTextHandler for Use in App.js
   Also, for Character Counter(Char/Length)*/
  const charTxt=(e)=>{
    props.inputTextHandler(e);
  setChar(e.target.value);
  console.log(props.ids)
  }
  const charTxt2=(e)=>{
    props.inputTextHandler2(e);
  setChar(e.target.value);
  }
/* preventD1/D2= SEND Request;send definitions to right previously selected object */
   return (
     <div className="Home">
       <header>Lokum</header>
     <form className='form1'>
      <p className='crtTxt'>Character Count = {char.length}/40</p>
      <div className='home1'>
        <div className='home2'>
     <input type="text" maxlength="40" autoComplete='off' value= {props.inputText} onChange={charTxt} className="translate" name="translate" minLength="4">
       </input>
       <div className='btns'>
       <button onClick={props.preventD1} className='btn1'> Save Text</button>
       </div>
       </div>
       <div className='home3'>
       <input maxLength="40" autoComplete='off' value= {props.inputText2} onChange={charTxt2} className="translate" name="translate" rows="4" cols="50">
       </input>
       <div className='btns'>
       <button onClick={props.preventD2} className='btn2'> Save Text</button>
       </div>
       </div>
       </div>
       <div className='newBtn'>
       <Link to='DB'>
       <button className='btn3'> Go to Database!</button>
       </Link>
       <Link to='/SavedSess'>
       <button className='btn4'> Return to Sessions!</button>
       </Link>
       </div>
 </form>
     </div>
   );
 }

 export default Home;