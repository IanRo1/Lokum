import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home';
import DB from './db';
import Cards from './cards';

function App() {
  const [inputText, setInputText] = useState("");
  const [translateText, setTranslateText] = useState([]);

  const inputTextHandler =(e) => {
    setInputText(e.target.value);
  }
  const preventD1 = (e) =>{
    e.preventDefault();
    setTranslateText([...translateText,{text: inputText, completed:false, id: Math.random() *1000}])
    setInputText("");
  }
  

  const translaText1 = translateText.map(transText => (
     transText.text
     ))
    
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home preventD1 = {preventD1} inputText ={inputText} inputTextHandler = {inputTextHandler} />}/>
          <Route path='DB' element={<DB trn={translaText1.slice(-1)[0]} />}/>
          <Route path='/DB/Cards'  element={<Cards trn={translaText1.slice(-1)[0]} />}/>
      </Routes>
</Router>
    </div>
  );
}

export default App;
