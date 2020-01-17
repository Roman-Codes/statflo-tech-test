import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCard, selectedField } from '../actions';

const Form = (props) => {
    const selectMonths = [];
    const selectYears = [];
    const [cCard, setCard] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvv, setCvv] = useState('');

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

    //Letter Char remover
    function  charStrip(value){
        const v = value.replace(/\D+/g, '');
        return v;
    }

    //Other char remover
    function letterOnly(value){
        const v = value.replace(/[^A-Za-z\s]/ig, '');
        return v;
    }

    // CC formatter
    function ccFormat(value) {
        const v = value.replace(/\s+/g, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
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

        return (nCheck % 10) === 0;
    }

    // Year formatter
    function yearFormat(value){
        return value.slice(-2);
    }

    // Event Handlers
    function handleCreditChange(event){
        const stripped = charStrip(event.target.value);

        setCard(ccFormat(stripped));
        props.updateCard('number',ccFormat(stripped));
    }

    function handleNameChange(event){
        const value = letterOnly(event.target.value);
        setCardName(value);
        props.updateCard('name', value);
    }

    function handleMonthChange(event){

        props.updateCard('month', event.target.value);
    }

    function handleYearChange(event){
        props.updateCard('year', yearFormat(event.target.value));
    }

    function handleCvvChange(event){
        const value = charStrip(event.target.value);
        setCvv(value);
        props.updateCard('cvv', value);
    }

    function handleFocus(event){
        props.selectedField(event.target.id);
        console.log(event.target);
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
            <label htmlFor="number">
                Card Number:
                <input
                    value={cCard}
                    onChange={handleCreditChange}
                    onFocus={handleFocus}
                    type="text"
                    id="number"
                    name="number"
                />
            </label>

            <br/>
            <label htmlFor="name">
                Card Name:
                <input
                    value={cardName}
                    onChange={handleNameChange}
                    onFocus={handleFocus}
                    type="text"
                    name="name"
                    id="name"
                />
            </label>
            <br/>

            <label htmlFor="expiry-date">
                Expiration Date:
                <select
                    defaultValue="Month"
                    onChange={handleMonthChange}
                    onFocus={handleFocus}
                    name="month"
                    id="month"
                >
                    <option disabled>Month</option>
                    {selectMonths.map(month => {
                        return(
                            <option value={month}>{month}</option>
                        )
                    })}
                </select>

                <select
                    defaultValue="Year"
                    onChange={handleYearChange}
                    onFocus={handleFocus}
                    name="year"
                    id="year"
                >
                    <option  disabled>Year</option>
                    {selectYears.map(year => {
                        return(
                            <option value={year}>{year}</option>
                        )
                    })}
                </select>
            </label>

            <label htmlFor="CVV">
                    CVV
                    <input
                        value={cvv}
                        onChange={handleCvvChange}
                        onFocus={handleFocus}
                        maxLength="4"
                        type="text"
                        name="CVV"
                        id="cvv"
                    />
            </label>
            <br/>

            <input type="submit" value="Submit" />
        </form>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        cardReducer: state,
    }
}

export default connect(mapStateToProps, { updateCard, selectedField })(Form);