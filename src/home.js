import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
  const [char,setChar] = useState('');

  const charTxt=(e)=>{
    props.inputTextHandler(e);
  setChar(e.target.value);

  }
   return (
     <div className="Home">
       <header>Lokum</header>
     <form>
      <p>Character Count = {char.length}/720</p>
     <textarea maxLength="720" value= {props.inputText} onChange={charTxt} className="translate" name="translate" rows="4" cols="50">
       </textarea>
       <div className='btns'>
       <button onClick={props.preventD1} className='btn1'> Save Text</button>
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