
export const updateCard = (name, value) => {

    return{
        type: `UPDATE_${name.toUpperCase()}`,
        payload: value
    };
}

export const selectedField = (name) => {
    return{
        type: 'SELECTED_FIELD',
        payload: name
    }
}