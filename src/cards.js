import './App.css';
import React from 'react';


function Cards(props){ 
    //trn = trans01-4, new array of translated values in order = [trans1-4], matched with word translated in order from prev page
    
    return(
<div className='cards'>
        <div className='cards_container1'>
            <div className='card1'>{props.newArr[0]}</div>
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