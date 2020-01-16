import { combineReducers } from 'redux';

const initialCardState = {
    name: '',
    number: '',
    month: '',
    year: '',
    cvv: '',
    type: ''
}

const cardReducer = (state = initialCardState, action) => {
    switch (action.type){
        case 'UPDATE_NUMBER':{
            return Object.assign({}, state, {
                number: action.payload
            })
        }
        case 'UPDATE_NAME':{
            return Object.assign({}, state, {
                name: action.payload
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

export default combineReducers({
    cardReducer: cardReducer
})