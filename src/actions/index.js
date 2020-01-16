
export const updateCard = (name, value) => {

    return{
        type: `UPDATE_${name.toUpperCase()}`,
        payload: value
    };
}