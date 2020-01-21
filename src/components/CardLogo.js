import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import '../styles/animations.css';

const CardLogo = ({ cardReducer }) => {
    const [animate, setAnimate] = useState(false);
    useEffect(()=>{
        setAnimate(!animate)
    },[cardReducer.type])

    return(
        <div className="LogoComp">
            <CSSTransition
                in={animate}
                timeout={300}
                classNames="logo"
                unmountOnExit
                onExit={()=> setAnimate(!animate)}
            >
                <img
                    src={`/assets/${cardReducer.type}.png`}
                    alt={`A logo for ${cardReducer.type} card`}
                />
            </CSSTransition>
        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({
        cardReducer:state.cardReducer
    })
}

export default connect(mapSstateToProps)(CardLogo);
