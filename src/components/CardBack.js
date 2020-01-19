import React from 'react';
import { connect } from 'react-redux';
import '../styles/CardBack.scss';

const CardBack = ({ cardReducer }) => {

    return(
        <div className="CardBack">
            <div className="CardBackTop">

            </div>

            <div className="CardBackMiddle">
                <div className="Label">
                    CVV
                </div>
                <div className="Field">
                    {cardReducer.cvv}
                </div>
            </div>

            <div className="CardBackBottom">
                <div className="Logo">{cardReducer.type === ''?
                    null :
                    <img
                        src={`/assets/${cardReducer.type}.png`}
                        alt={`A logo for ${cardReducer.type} card`}
                    />}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer,
    })
}

export default connect(mapStateToProps)(CardBack);