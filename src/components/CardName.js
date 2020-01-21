import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import '../styles/CardName.scss';
import '../styles/animations.css';

const CardName = ({ cardReducer }) => {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        handleChange(cardReducer.name);
    },[cardReducer.name])

    const handleChange = (string) => {
        setLetters([...string]);
    };

    return (
        <div className="CardLetters">
            <TransitionGroup
                    className="LetterGroup"
                >
                {letters.map((letter, index) => (
                    <CSSTransition
                    key={index+letter}
                    timeout={500}
                    classNames="letter"
                    >
                        <div id={index+letter}>{letter}</div>
                    </CSSTransition>
                ))}<span id='placeholder'>&nbsp;</span>
            </TransitionGroup>
        </div>
    );
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer
    })
}

export default connect(mapSstateToProps)(CardName);