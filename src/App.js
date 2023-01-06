import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home';
import DB from './db';
import Cards from './cards';

function App() {
  const [inputText, setInputText] = useState("");
  const [translateText, setTranslateText] = useState([]);
  const [inputText2, setInputText2] = useState("");
  const [translateText2, setTranslateText2] = useState([]);

  const inputTextHandler =(e) => {
    setInputText(e.target.value);
  }
  const inputTextHandler2 =(e) => {
    setInputText2(e.target.value);
  }
  const preventD1 = (e) =>{
    e.preventDefault();
    setTranslateText([...translateText,{text: inputText, completed:false, id: Math.random() *1000}])
    setInputText("");
  }
  const preventD2 = (e) =>{
    e.preventDefault();
    setTranslateText2([...translateText2,{text: inputText2, completed:false, id: Math.random() *1000}])
    setInputText2("");
  }

  const translaText1 = translateText.map(transText => (
     transText.text
     ))
     const translaText2 = translateText2.map(transText2 => (
      transText2.text
      ))
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home preventD1 = {preventD1} preventD2 = {preventD2} inputText ={inputText} inputText2 ={inputText2} inputTextHandler = {inputTextHandler} inputTextHandler2 ={inputTextHandler2}/>}/>
          <Route path='DB' element={<DB trn={translaText1.slice(-1)[0]} trn2={translaText2.slice(-1)[0]}/>}/>
          <Route path='/DB/Cards'  element={<Cards trn={translaText1.slice(-1)[0]} />}/>
      </Routes>
</Router>
    </div>
  );
}

export default App;
