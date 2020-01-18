import React from 'react';
import { connect } from 'react-redux';

const CardFront = ({ cardReducer }) =>{
    return(
        <div className="cardFront">
            <h2>This is the front of the card</h2>
            This is card number:{cardReducer.number}
            <br/>
            This is card name:{cardReducer.name}
            <br/>
            EXP:{cardReducer.month}/{cardReducer.year}
            <br/>
            {cardReducer.type === ''? null : <img
            src={`/assets/${cardReducer.type}.png`} alt={`A logo for ${cardReducer.type} card`}/>}
            <br/>

        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer,
    })
}

export default connect(mapSstateToProps)(CardFront);