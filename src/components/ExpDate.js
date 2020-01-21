import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import '../styles/animations.css';
import '../styles/ExpDate.scss';

const ExpDate = ({ cardReducer }) => {

    const [animateMonth, setAnimateMonth] = useState(false);
    const [animateYear, setAnimateYear] = useState(false);
    useEffect(()=>{
        setAnimateYear(!animateYear)
    },[cardReducer.year])

    useEffect(()=>{
        setAnimateMonth(!animateMonth)
    },[cardReducer.month])
    return(
        <div className="ExpDate">
            <CSSTransition
                in={animateMonth}
                timeout={200}
                classNames="date"
                unmountOnExit
                onExit={()=> setAnimateMonth(!animateMonth)}
            >
                <div>{cardReducer.month}</div>
            </CSSTransition>
            /
            <CSSTransition
                in={animateYear}
                timeout={200}
                classNames="date"
                unmountOnExit
                onExited={()=> setAnimateYear(!animateYear)}
            >
                <div>{cardReducer.year}</div>
            </CSSTransition>
        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer
    })
}

export default connect(mapSstateToProps)(ExpDate);
