import React, { useState, useEffect } from 'react';
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
  const [translateText3, setTranslateText3] = useState([]);
  const [translateText4, setTranslateText4] = useState([]);
  const [num,setNum]=useState(0);
  const [num2,setNum2]=useState(0);
  
  const inputTextHandler =(e) => {
    setInputText(e.target.value);
  }
  const inputTextHandler2 =(e) => {
    setInputText2(e.target.value);
  }
  const preventD1 = (e) =>{
    e.preventDefault();
    setNum(num+1);
    setTranslateText([...translateText,{text: inputText}])
    setInputText("");
    setTranslateText3([...translateText3,{text: inputText, completed:false, id:num }])
  }
  const preventD2 = (e) =>{
    e.preventDefault();
    setTranslateText2([...translateText2,{text: inputText2}])
    setInputText2("");
    setTranslateText4([...translateText4,{text: inputText2, completed:false, id: num2 }])
    setNum2(num2+1);
  }

  const translaText1 = translateText.map(transText => {
     return <li id={transText.id}>{transText.text}</li>
  })
     const translaText2 = translateText2.map(transText2 => {
      return <li id={transText2.id}>
        {transText2.text}</li>
     })
     
     const newArr =[translateText3.map(tText => {
      return <li key={tText.id}id={tText.id}>{tText.text}</li>})][0];


   const newArr2=[translateText4.map(tText2 => {
    return <li key={tText2.id}id={tText2.id}>{tText2.text}</li>})][0];
 
      
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home preventD1 = {preventD1} preventD2 = {preventD2} inputText ={inputText} inputText2 ={inputText2} inputTextHandler = {inputTextHandler} inputTextHandler2 ={inputTextHandler2}/>}/>
          <Route path='DB' element={<DB trn={translaText1} trn2={translaText2}/>}/>
          <Route path='/DB/Cards'  element={<Cards newArr={newArr} newArr2={newArr2}trn={translaText1} trn2={translaText2}/>}/>
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