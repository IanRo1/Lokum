import React, { useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './signin';
import SavedSess from './savedSession';
import Session from './session';
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
  const [sessionName, setSessionName] = useState("");
  const [sessionName1, setSessionName1] = useState([]);
  const [sessActive, setSessActive] = useState(false);
  const [names, setNames] = useState("");
  const [dbData, setdbData] = useState([]);
   /*Transferring Input Text from Home.JS Input Field*/

  const inputTextHandler =(e) => {
    setInputText(e.target.value);
  }
  const inputTextHandler2 =(e) => {
    setInputText2(e.target.value);
  }
   /*Using Typed Input Text from home.js to Build Values in State with Matching IDs;
   Also Setting Input Text to Blank After Each Save*/

  const preventD1 = (e) =>{
    e.preventDefault();
    setNum(num+1);
    setTranslateText([...translateText,{text: inputText,key:num,id:num}])
    setInputText("");
    setTranslateText3([...translateText3,{text: inputText,key:num,id:num }])
  }
  const preventD2 = (e) =>{
    e.preventDefault();
    setTranslateText2([...translateText2,{text: inputText2,key:num2,id: num2}])
    setInputText2("");
    setTranslateText4([...translateText4,{text: inputText2,key:num2,id: num2 }])
    setNum2(num2+1);
  }
   /*Mapping Through Typed Input Values in State in Order to Build New Array with Accessible Values/IDs
    Needs to be Done Twice for Each Set of Values; One Set For Display That Can't Be Modified Through Comparison(translaText1&&2),
    And One Set That Can Be For Memorization Game(translaText3&&4)(Modified Later in cards.js Through Filter After ID Comparison)*/
    const deleteLi=(e)=>{
      setTranslateText(translateText.filter((x) => x.id !== +e.currentTarget.id));
      setTranslateText2(translateText2.filter((x) => x.id !== +e.currentTarget.id));
      setTranslateText3(translateText3.filter((x) => x.id !== +e.currentTarget.id));
      setTranslateText4(translateText4.filter((x) => x.id !== +e.currentTarget.id));
      console.log(e.target.id)
    }

  const translaText1 = translateText.map(transText => {
     return <div className='dltBtn'><li>{transText.text}</li><p className='dltBtn2' onClick={deleteLi} id={transText.id}>X</p></div>
  })
  
     const translaText2 = translateText2.map(transText2 => {
      return <div className='dltBtn'><li>
        {transText2.text}</li><p className='dltBtn2' onClick={deleteLi} id={transText2.id}>X</p></div>
     })
     /*Mapping Second Set of Typed Values for Comparison, but Only Displaying Last Typed Values[0], Otherwise All Values 
     Will Be Displayed*/
     
     const newArr =[translateText3.map(tText => {
      return <button className='cli' key={tText.id}id={tText.id}>{tText.text}</button>})][0];


      const newArr2=[translateText4.map(tText2 => {
        return <button className='cli' key={tText2.id}id={tText2.id}>{tText2.text}</button>})][0];

         /*Slicing/Randomizing 2nd Mapped Array So That Only 4 Matching Values Appear at a Time in Random Order*/

        const newestArray =[newArr.slice(0,4).sort(() => Math.random() - 0.5)];
        const newestArray2 =[newArr2.slice(0,4).sort(() => Math.random() - 0.5)];

        
 
      
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<SignIn setNames={setNames} names={names}/>}/>
        <Route path='/SavedSess' element={<SavedSess sessActive={sessActive} setSessActive={setSessActive}sessionName={sessionName} sessionName1={sessionName1}/>}/>
        <Route path='/SavedSess/Session' element={<Session dbData={dbData} setdbData={setdbData} sessActive={sessActive} setSessActive={setSessActive}names={names} sessionName={sessionName} setSessionName={setSessionName} sessionName1={sessionName1} setSessionName1={setSessionName1}/>}/>
          <Route path="SavedSess/Session/home" element={<Home preventD1 = {preventD1} preventD2 = {preventD2} inputText ={inputText} inputText2 ={inputText2} inputTextHandler = {inputTextHandler} inputTextHandler2 ={inputTextHandler2}/>}/>
          <Route path='SavedSess/Session/home/DB' element={<DB  trn={translaText1} trn2={translaText2}/>}/>
          <Route path='SavedSess/Session/home/DB/Cards'  element={<Cards newestArray2={newestArray2} newestArray={newestArray}setTranslateText2={setTranslateText2} translateText2={translateText2}setTranslateText={setTranslateText}translateText={translateText} setTranslateText4={setTranslateText4} translateText4={translateText4}translateText3={translateText3} setTranslateText3={setTranslateText3}newArr={newArr} newArr2={newArr2}trn={translaText1} trn2={translaText2}/>}/>
      </Routes>
</Router>
    </div>
  );
}

export default App;
