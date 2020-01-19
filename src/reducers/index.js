import { combineReducers } from 'redux';

const initialCardState = {
    name: '',
    number: '#### #### #### ####',
    month: 'MM',
    year: 'YY',
    cvv: '',
    type: ''
}

// Adds and removes #s to the card number
const formatNumber = (number) => {
    const poundString = initialCardState.number;
    const meargedString = number + poundString.slice(number.length);
    return meargedString;
}

const cardReducer = (state = initialCardState, action) => {
    switch (action.type){
        case 'UPDATE_NUMBER':{

            return Object.assign({}, state, {
                number: formatNumber(action.payload)
            })
        }
        case 'UPDATE_NAME':{
            return Object.assign({}, state, {
                name: action.payload.toUpperCase()
            })
        }
        case 'UPDATE_MONTH':{
            return Object.assign({}, state, {
                month: action.payload
            })
        }
        case 'UPDATE_YEAR':{
            return Object.assign({}, state, {
                year: action.payload
            })
        }
        case 'UPDATE_CVV':{
            return Object.assign({}, state, {
                cvv: action.payload
            })
        }
        case 'UPDATE_TYPE':{
            return Object.assign({}, state, {
                type: action.payload
            })
        }

        default:
        return state
    }
}

const cvvSelected = (state = '', action) => {
    if (action.type === 'SELECTED_CVV'){
        return action.payload;
    }
    return state;
}

export default combineReducers({
    cardReducer: cardReducer,
    cvvSelected: cvvSelected
})