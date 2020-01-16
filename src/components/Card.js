import React from 'react';
import { connect } from 'react-redux';

const Card = (props) =>{
    return(
        <div className="card">
            This is card number:{props.cardReducer.number}
            <br/>
            This is card name:{props.cardReducer.name}
            <br/>
            This is card month:{props.cardReducer.month}
            <br/>
            This is card year:{props.cardReducer.year}
            <br/>

        </div>
    )
}

const mapSstateToProps = (state) =>{
    return ({cardReducer:state.cardReducer})
}

export default connect(mapSstateToProps)(Card);