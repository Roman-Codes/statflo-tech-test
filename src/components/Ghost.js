import React from 'react';
import { connect } from 'react-redux';
import '../styles/Ghost.scss';

const Ghost = ({cvvSelected, number, name, date}) => {
    const ghostedElt = {number: 'number', name: 'name'}[cvvSelected] || 'date';

    // Creates style object for ghost frame
    const createGhostStyle = (val) => {
        const propsObject = {
            number: number,
            name: name,
            date: date
        }

        const chosenProp = propsObject[val];

        const ghostStyle = {
            top: `${chosenProp.offsetTop}px`,
            left: `${chosenProp.offsetLeft}px`,
            height: `${chosenProp.clientHeight}px`,
            width: `${chosenProp.clientWidth}px`
        }
        return ghostStyle;
    }

    return(
        <div className="Ghost" style={createGhostStyle(ghostedElt)}></div>
    )
}

const mapStateToProps = (state) =>{
    return ({
        cvvSelected:state.cvvSelected,
    })
}

export default connect(mapStateToProps)(Ghost);