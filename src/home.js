import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
  const [char,setChar] = useState('');

  const charTxt=(e)=>{
    props.inputTextHandler(e);
  setChar(e.target.value);
  }
  const charTxt2=(e)=>{
    props.inputTextHandler2(e);
  setChar(e.target.value);
  }
   return (
     <div className="Home">
       <header>Lokum</header>
     <form>
      <p className='crtTxt'>Character Count = {char.length}/40</p>
      <div className='home1'>
        <div className='home2'>
     <input type="text" value= {props.inputText} onChange={charTxt} className="translate" name="translate" minlength="4" maxlength="40">
       </input>
       <div className='btns'>
       <button onClick={props.preventD1} className='btn1'> Save Text</button>
       </div>
       </div>
       <div className='home3'>
       <input maxLength="40" value= {props.inputText2} onChange={charTxt2} className="translate" name="translate" rows="4" cols="50">
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
       </div>
 </form>
     </div>
   );
 }

 export default Home;