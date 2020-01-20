import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import uuid from 'uuid';

import '../styles/animations.css';

const CardName = ({cardReducer}) => {
const [letters, setLetters] = useState([]);

useEffect(() => {
    handleChange(cardReducer.name);
},[cardReducer.name])

const handleChange = (string) => {
    const lastChar = Array.from(string).pop();
    if (string.length > letters.length) {
        setLetters([...letters,
            {
                id: uuid(),
                text: lastChar === ' ' ? '\u00A0' : lastChar,
            }
        ]);
    } else if (string.length < letters.length) {
        const id = [...letters].pop().id;
        setLetters(items =>
            items.filter(item => item.id !== id)
        );
    } else {
        return
    }
};

    return (
        <div className="CardLetters">
            <TransitionGroup
                style={{ display: 'flex' }}
                >
                <span>&nbsp;</span>
                {letters.map(({ id, text }) => (
                    <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="letter"
                    >
                        <div id={id}>{text}</div>
                    </CSSTransition>
                ))}
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