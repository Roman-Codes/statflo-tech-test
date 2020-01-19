import React from 'react';
import { connect } from 'react-redux';
import '../styles/CardFront.scss';

const CardFront = ({ cardReducer }) =>{
    return(
        <div className="CardFront">
            <div className="CardFrontTop">
                <div className="Chip">
                    <img src="/assets/chip.png" alt="An image of a credit card chip"/>
                </div>
                <div className="Logo">{cardReducer.type === ''?
                    null :
                    <img
                        src={`/assets/${cardReducer.type}.png`}
                        alt={`A logo for ${cardReducer.type} card`}
                    />}
                </div>
            </div>
            <div className="CardFrontMiddle">
                {cardReducer.number}
            </div>
            <div className="CardFrontBottom">
                <div className="CardName">
                    <p className="InputLabel">
                        Card Holder
                    </p>
                    <p className="InputData">
                        {cardReducer.name}
                    </p>
                </div>
                <div className="CardExp">
                    <p className="InputLabel">
                        Expires
                    </p>
                    <p className="InputData">
                        {cardReducer.month}/{cardReducer.year}
                    </p>
                </div>
            </div>


        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer,
    })
}

export default connect(mapSstateToProps)(CardFront);