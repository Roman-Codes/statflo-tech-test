import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Ghost from './Ghost';
import ExpDate from './ExpDate';
import '../styles/CardFront.scss';
import CardLogo from './CardLogo';
import CardName from './CardName';

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
                    <img src="/assets/chip.png" alt="An colorful credit card chip"/>
                </div>
                <div className="Logo">{cardReducer.type === ''?
                    null :
                    <CardLogo />}
                </div>
            </div>
            <div className="CardFrontMiddle" ref={numberRef}>
                {cardReducer.number}
            </div>
            <div className="CardFrontBottom">
                <div className="CardName" ref={nameRef}>
                    <p className="InputLabel">
                        &nbsp;Card Holder
                    </p>
                    <CardName />
                </div>
                <div className="CardExp" ref={dateRef}>
                    <p className="InputLabel">
                        Expires
                    </p>
                    <ExpDate />
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