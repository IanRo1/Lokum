import './App.css';
import React, { useState, useEffect } from 'react';


function Cards(props){  
 const [ID, setIDs] = useState([]);
 const [ID2, setIDs2] = useState([]);

    const newestArray =[props.newArr.sort(() => Math.random() - 0.5)]
     const newestArray2 =[props.newArr2.sort(() => Math.random() - 0.5)]
        
      const filterID =  [ID];
      const filterID2 =  [ID2];
    
    const getID =(e) => {
        setIDs(e.target.id)
      console.log(ID)
      }
      const getID2 =(e) => {
        setIDs2(e.target.id)
        console.log(ID2)
      }
      
      useEffect(()=>{
        if(ID && ID2){
          if(ID === ID2){
        props.setTranslateText3(filterID.filter(x => x === filterID2));
        props.setTranslateText4(filterID2.filter(x => x === filterID));
          }}
    },[ID,ID2])
   
    return(
<div className='cards'>
        <div className='cards_container1'>
            <div className='card1' onClick={getID}>{newestArray[0]}</div>
            <div className='card2'onClick={getID}>{newestArray[1]}</div>
            <div className='card3'onClick={getID}>{newestArray[2]}</div>
            <div className='card4'onClick={getID}>{newestArray[3]}</div>
            
        </div>
        <div className='cards_container2'>
        <div className='card5'onClick={getID2}>{newestArray2[0]}</div>
        <div className='card6'onClick={getID2}>{newestArray2[1]}</div>
        <div className='card7'onClick={getID2}>{newestArray2[2]}</div>
        <div className='card8'onClick={getID2}>{newestArray2[3]}</div>
        </div>
</div>
    );
    }


export default Cards;