import React from 'react';
import { connect } from 'react-redux';

const CardFront = (props) =>{
    return(
        <div className="card-front">
            <h2>This is the front of the card</h2>
            This is card number:{props.cardReducer.number}
            <br/>
            This is card name:{props.cardReducer.name}
            <br/>
            EXP:{props.cardReducer.month}/{props.cardReducer.year}
            <br/>
            {/* {props.selectedFieldReducer?console.log('yay'):console.log('nay')}
            This is CVV: {props.cardReducer.cvv} */}
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