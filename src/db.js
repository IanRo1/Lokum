import './App.css';
import {Link} from 'react-router-dom';


function DB(props){
 //column_two will no longer host props.trn2, but will represent an array of values translated word by word from text that needs
 //to be translated
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
          <textarea id='for_lang' className='for_lang'rows="4" cols="15"></textarea>
          <textarea id='Nat_lang'classname='Nat_lang'rows="4" cols="15"></textarea>
        </div>
   </div>
    );
}

  export default DB;