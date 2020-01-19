import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import '../styles/CardFront.scss';
import Ghost from './Ghost';

const CardFront = ({ cardReducer, cvvSelected }) =>{
    const [number, setNumber] = useState(0);
    const [name, setName] = useState(0);
    const [date, setDate] = useState(0);
    const numberRef = useRef(null);
    const nameRef = useRef(null);
    const dateRef = useRef(null);

    useEffect(() => {
        setNumber(numberRef.current);
        setName(nameRef.current);
        setDate(dateRef.current);
    }, []);

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
            <div className="CardFrontMiddle" ref={numberRef}>
                {cardReducer.number}
            </div>
            <div className="CardFrontBottom">
                <div className="CardName" ref={nameRef}>
                    <p className="InputLabel">
                        Card Holder
                    </p>
                    <p className="InputData">
                        {cardReducer.name}
                    </p>
                </div>
                <div className="CardExp" ref={dateRef}>
                    <p className="InputLabel">
                        Expires
                    </p>
                    <p className="InputData">
                        {cardReducer.month}/{cardReducer.year}
                    </p>
                </div>
            </div>
            {cvvSelected.length?<Ghost number={ number } name={ name } date={ date } />:null}
        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer,
        cvvSelected:state.cvvSelected
    })
}

export default connect(mapSstateToProps)(CardFront);