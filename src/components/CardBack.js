import React from 'react';
import { connect } from 'react-redux';
import '../styles/CardBack.scss';

const CardBack = (props) => {

    return(
        <div className="CardBack">
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