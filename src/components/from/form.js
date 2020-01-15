import React, { useState } from 'react';

function Form() {
    const selectMonths = [];
    const selectYears = [];
    const [cCard, setCard] = useState('');
    const [cardName, setCardName] = useState('');

    // Select options populators
    for (let i = 1; i <= 12; i++){
        if (i.toString().length === 1){
            selectMonths.push(`0${i}`)
        } else {
            selectMonths.push(i)
        }
    }

    for (let i = 2020; i <= 2035; i++){
        selectYears.push(i)
    }

    // CC formatter
    function ccFormat(value) {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }

    // CC validator
    function validCreditCard(value) {
    // Accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;

        // The Luhn Algorithm.
        let nCheck = 0, bEven = false;
        value = value.replace(/\D/g, "");

        for (let n = value.length - 1; n >= 0; n--) {
            let cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }

    // Event Handlers
    function handleCreditChange(event){
        setCard(ccFormat(event.target.value));
    }

    function handleNameChange(event){
        setCardName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (validCreditCard(cCard)){
            alert('All good');
            return
        }
        alert('Wrong number');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Card Number
                <input value={cCard} onChange={handleCreditChange} type="text" name="number" />
            </label>

            <br/>
            <label>
                Card Name
                <input value={cardName} onChange={handleNameChange} type="text" name="name" />
            </label>
            <br/>

            <label>
                Expiration Date
                <select name="month" id="month">
                    <option disabled value="Month">Month</option>
                    {selectMonths.map(month => {
                        return(
                            <option value={month}>{month}</option>
                        )
                    })}
                </select>
                <select name="year" id="year">
                    <option disabled>Year</option>
                    {selectYears.map(year => {
                        return(
                            <option value={year}>{year}</option>
                        )
                    })}
                </select>
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;