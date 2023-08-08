import './App.css';
import React, { useState, useEffect } from 'react';


function Cards(props){  
 const [ID, setIDs] = useState(null);
 const [ID2, setIDs2] = useState(null);


     const transferTxt=()=>{
      props.setTranslateText3(props.translateText)
      props.setTranslateText4(props.translateText2)
      setIDs(null);
      setIDs2(null);
     }
    
    const getID =(e) => {
        setIDs(+e.target.id)
      }
      const getID2 =(e) => {
        setIDs2(+e.target.id) 
      }
      
      useEffect(()=>{
       if(ID === ID2){
        props.setTranslateText3(props.translateText3.filter((x) => x.id !== ID));
        props.setTranslateText4(props.translateText4.filter((x) => x.id !== ID2));
       }
    },[ID,ID2])
   
    return(
<div className='cards'>
        <div className='cards_container1'>
            <div className='card1' onClick={getID}>{props.newestArray[0]}</div>
            <div className='card2' onClick={getID}>{props.newestArray[1]}</div>
            <div className='card3' onClick={getID}>{props.newestArray[2]}</div>
            <div className='card4' onClick={getID}>{props.newestArray[3]}</div> 
        </div>
        <button className='reset' onClick={transferTxt}>reset</button>
        <div className='cards_container2'>
        <div className='card5' onClick={getID2}>{props.newestArray2[0]}</div>
        <div className='card6' onClick={getID2}>{props.newestArray2[1]}</div>
        <div className='card7' onClick={getID2}>{props.newestArray2[2]}</div>
        <div className='card8' onClick={getID2}>{props.newestArray2[3]}</div>
        </div>
</div>
    );
    }


export default Cards;