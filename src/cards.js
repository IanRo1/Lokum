import './App.css';
import React, { useState, useEffect } from 'react';


function Cards(props){  
 const [ID, setIDs] = useState([]);
 const [ID2, setIDs2] = useState([]);

    const newestArray =[props.newArr.slice(0,4).sort(() => Math.random() - 0.5)]
     const newestArray2 =[props.newArr2.slice(0,4).sort(() => Math.random() - 0.5)]
    
    const getID =(e) => {
        setIDs(+e.target.id)
      console.log(props.translateText3, ID)
      }
      const getID2 =(e) => {
        setIDs2(+e.target.id)
        console.log(props.translateText4, ID2)
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