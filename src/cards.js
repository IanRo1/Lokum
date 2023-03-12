import './App.css';
import React from 'react';


function Cards(props){ 
    const getID =(e) => {
       console.log(e.target.id);
      }
    return(
<div className='cards'>
        <div className='cards_container1'>
            <div className='card1' onClick={getID}>{props.newArr[0]}</div>
            <div className='card2'onClick={getID}>{props.newArr[1]}</div>
            <div className='card3'onClick={getID}>{props.newArr[2]}</div>
            <div className='card4'onClick={getID}>{props.newArr[3]}</div>
            
        </div>
        <div className='cards_container2'>
        <div className='card5'onClick={getID}>{props.newArr2[0]}</div>
        <div className='card6'onClick={getID}>{props.newArr2[1]}</div>
        <div className='card7'onClick={getID}>{props.newArr2[2]}</div>
        <div className='card8'onClick={getID}>{props.newArr2[3]}</div>
        </div>
</div>
    );
}





export default Cards;