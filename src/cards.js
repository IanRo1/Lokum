import './App.css';
import React, { useState, useEffect } from 'react';


function Cards(props){  

/*Establishing State to Save IDs for Comparison*/

 const [ID, setIDs] = useState(null);
 const [ID2, setIDs2] = useState(null);
 const [Counter, setCounter] = useState(0);
 
 

 /*Function to Transfer Display Values(TranslateText1 && 2) from App.JS To The Active Values(TranslateText3 && 4),
 Sets IDs Back to Null, Otherwise Comparison If() Function Below in UseEffect Won't Work Properly*/

     const transferTxt=()=>{
      props.setTranslateText3(props.translateText)
      props.setTranslateText4(props.translateText2)
      setIDs(null);
      setIDs2(null);
     }
    
/*Functions to Save IDs to State as Numbers*/

    const getID =(e) => {
        setIDs(+e.target.id)
        setCounter(Counter+1)
      }
      const getID2 =(e) => {
        setIDs2(+e.target.id) 
        setCounter(Counter+1)
      }
      /*UseEffect to Constantly Check If Clicked IDs in State Match IDs of Active Values(TransferText 3&4); 
      If So, They Are Reduced*/

      useEffect(()=>{
       if(ID === ID2){
        props.setTranslateText3(props.translateText3.filter((x) => x.id !== ID));
        props.setTranslateText4(props.translateText4.filter((x) => x.id !== ID2));
       }
    },[ID,ID2])

    useEffect(()=>{
        if(Counter === 2){
            setIDs(null);
            setIDs2(null);
            setCounter(Counter === 0)
        }
     },[Counter, setIDs, setIDs2])
    
   
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