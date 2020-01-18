
export const updateCard = (name, value) => {

    return{
        type: `UPDATE_${name.toUpperCase()}`,
        payload: value
    };
}

export const cvvSelected = (name) => {
    return{
        type: 'SELECTED_CVV',
        payload: name
    }
}