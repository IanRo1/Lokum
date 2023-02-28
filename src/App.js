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

  const translaText1 = translateText.map(transText => {
     return <li>{transText.text}</li>
  })
     
     const translaText11 = translateText.map(transText => (
      transText.id
      ))
     const translaText2 = translateText2.map(transText2 => {
      return <li>{transText2.text}</li>
     })
      const translaText22 = translateText2.map(transText2 => (
        transText2.id
        ))
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home preventD1 = {preventD1} preventD2 = {preventD2} inputText ={inputText} inputText2 ={inputText2} inputTextHandler = {inputTextHandler} inputTextHandler2 ={inputTextHandler2}/>}/>
          <Route path='DB' element={<DB trn={translaText1} trn2={translaText2}/>} trn11={translaText11} trn22={translaText22}/>
          <Route path='/DB/Cards'  element={<Cards trn={translaText1} />}/>
      </Routes>
</Router>
    </div>
  );
}

export default App;
/* To divide each array element by spaces: 
  const translaText2 = translateText2.map(transText2 => (
      transText2.text.split(/\s+/).map(spltTxt1 =>{
        return <li>{spltTxt1}</li>
     })
     trn2={translaText2.slice(-1)[0]} */