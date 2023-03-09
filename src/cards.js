import './App.css';
import React from 'react';


function Cards(props){ 
    
    const choice =()=>{
         console.log(props.newArr)
    }
    return(
<div className='cards'>
        <div className='cards_container1'>
            <div className='card1'onClick={choice}>{props.newArr[0]}</div>
            <div className='card2'>{props.newArr[1]}</div>
            <div className='card3'>{props.newArr[2]}</div>
            <div className='card4'>{props.newArr[3]}</div>
            
        </div>
        <div className='cards_container2'>
        <div className='card5'>{props.newArr2[0]}</div>
        <div className='card6'>{props.newArr2[1]}</div>
        <div className='card7'>{props.newArr2[2]}</div>
        <div className='card8'>{props.newArr2[3]}</div>
        </div>
</div>
    );
}





export default Cards;