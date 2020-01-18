import React from 'react';
import { connect } from 'react-redux';

const CardBack = (props) => {

    return(
        <div className="card back">
            <h2>
                This is the back of the card.
            </h2>
            <p>This is CVV {props.cardReducer.cvv}</p>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer,
    })
}

export default connect(mapStateToProps)(CardBack);