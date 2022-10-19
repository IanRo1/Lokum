import './App.css';
import {Link} from 'react-router-dom';

function Home(props) {
   return (
     <div className="Home">
       <header>Lokum</header>
     <form>
     <textarea value= {props.inputText} onChange={props.inputTextHandler} className="translate" name="translate" rows="4" cols="50">
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