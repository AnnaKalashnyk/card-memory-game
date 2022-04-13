import React from 'react';

const Button = props => {
    let {buttonText, onClickHandler, buttonState} = props

    return <button onClick={onClickHandler} disabled={buttonState === 'disabled'}>{buttonText}</button>
}

export default Button;
