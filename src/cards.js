import './App.css';


function Cards(props){ 
    //trn = trans01-4, new array of translated values in order = [trans1-4], matched with word translated in order from prev page
    return(
<div className='cards'>
    <form>
        <div className='cards_container1'>
            <div className='card1'>[trans01]</div>
            <div className='card2'>[trans02]</div>
            <div className='card3'>[trans03]</div>
            <div className='card4'>[trans04]</div>
            
        </div>
        <div className='cards_container2'>
        <div className='card5'>[trans1]</div>
        <div className='card6'>[trans2]</div>
        <div className='card7'>[trans3]</div>
        <div className='card8'>[trans4]</div>
        </div>
    </form>

</div>
    );
}





export default Cards;