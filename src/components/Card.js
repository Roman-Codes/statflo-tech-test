import React from 'react';
import { connect } from 'react-redux';

const Card = (props) =>{
    return(
        <div className="card">
            This is card number:{props.cardReducer.number}
            <br/>
            This is card name:{props.cardReducer.name}
            <br/>
            EXP:{props.cardReducer.month}/{props.cardReducer.year}
            <br/>
            {/* {props.selectedFieldReducer?console.log('yay'):console.log('nay')} */}
            This is CVV: {props.cardReducer.cvv}
            <br/>

        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer,
        selectedFieldReducer:state.selectedFieldReducer
    })
}

export default connect(mapSstateToProps)(Card);