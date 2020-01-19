import React, { useState } from 'react';
import '../styles/Form.scss';
import { connect } from 'react-redux';
import { updateCard, cvvSelected } from '../actions';

const Form = (props) => {
    const selectMonths = [];
    const selectYears = [];
    const [cCard, setCard] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardType, setCardType] = useState('');

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

    // Card type picker
    function determineCard(number) {
        const cardCodes = {
            amex:[34, 37],
            jcb: [352, 353, 354, 355],
            unionpay: [62, 81],
            dinersclub: [300, 301, 302, 303, 304, 305, 36, 38, 39],
            discover: [60, 622, 624, 625, 626, 628, 64, 65],
            mastercard: [51, 52, 53, 54, 55],
            troy: [979],
            visa: [4]
        }

        for (let key in cardCodes){
            if (cardCodes[key].includes(parseInt(number))){
                setCardType(key);
                return key;
            }
        }
        return cardType;
    }

    // Event Handlers
    function handleCreditChange(event){
        const stripped = charStrip(event.target.value);
        props.updateCard('type', determineCard(stripped));
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
        props.cvvSelected(event.target.id);
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
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="number">
                        Card Number
                </label>
                <input
                    value={cCard}
                    onChange={handleCreditChange}
                    onFocus={handleFocus}
                    maxLength="19"
                    type="text"
                    id="number"
                    name="number"
                />

                <label
                    htmlFor="name">
                    Card Name
                </label>
                <input
                    value={cardName}
                    onChange={handleNameChange}
                    onFocus={handleFocus}
                    maxLength="19"
                    type="text"
                    name="name"
                    id="name"
                />

                <div className="FormBottom">
                    <fieldset>
                        <legend>Expiration Date</legend>
                        <label className="visually-hidden" htmlFor="month">Month</label>
                        <select
                            className="Month"
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

                        <label className="visually-hidden" htmlFor="year">Year</label>
                        <select
                            className="Year"
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
                    </fieldset>

                    <div className="FormBottomRight">
                        <label htmlFor="CVV">
                            CVV
                        </label>
                        <input
                            value={cvv}
                            onChange={handleCvvChange}
                            onFocus={handleFocus}
                            maxLength="4"
                            type="text"
                            name="CVV"
                            id="cvv"
                        />
                    </div>
                </div>

                <input className="Submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        cardReducer: state,
    }
}

export default connect(mapStateToProps, { updateCard, cvvSelected })(Form);