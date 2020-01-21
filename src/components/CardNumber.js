import React, { useState, useEffect } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import styled from 'styled-components';
import { connect } from 'react-redux';

import '../styles/animations.css';

const FadeDiv = styled.div`
    transition:all 0.2s;
    font-family: 'Ubuntu Mono';
    font-size: 20px;
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
    transform: translateY(${({ state }) => (state === "entered" ? '0px' :'-5px')});
    display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
    <Transition {...rest}>
        {state => <FadeDiv state={state}>{children}</FadeDiv>}
    </Transition>
);

const SwitchableText = ({ arr, num }) => (
    <SwitchTransition mode="out-in">
        <FadeTransition
            key={arr[num] ? 'foo' : 'bar'}
            timeout={200}
            unmountOnExit
            mountOnEnter
        >
            {arr[num] ? <div>{arr[num]}</div> : <div>#</div>}
        </FadeTransition>
    </SwitchTransition>
);

const CardNumber = ({ cardReducer }) => {
    const [numbers, setNumbers] = useState([]);

    useEffect(()=> {
        const numbersArr = [...cardReducer.number];
        setNumbers(numbersArr.filter(number => number !== ' '));
    }, [cardReducer.number]);

    //inserts empty spaces into an array at given indexes
    const insertSpace = (array, spaces) =>{
        spaces.forEach(index => {
            array.splice(index, 0, <div>&nbsp;</div>);
        })
    }

    const renderNumbers = () => {
        const arr = [];
        for (let i = 0; i <= 15; i++){
                arr.push(<SwitchableText arr={numbers} num={i}/>)
            }
        insertSpace(arr, [4,9,14]);
        return arr.map(elm => elm);
    }

    return (
        <div className="Numbers" style={{display:'flex'}}>
            {renderNumbers()}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer
    })
}

export default connect(mapStateToProps)(CardNumber);