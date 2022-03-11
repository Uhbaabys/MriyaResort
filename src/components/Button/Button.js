import React from "react";
import './Button.scss';

const Button = (props) => {
    return (
        <button className={props.style}>{props.text}</button>
    )
}

export default Button;