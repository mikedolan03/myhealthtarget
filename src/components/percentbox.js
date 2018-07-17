import React from 'react';

//import './percentbox.css';

export default function PercentBox(props) {
    return (
        <div className="percent-box-container">
            <h2>{props.heading}</h2>
            <h3>{props.number}{props.unit}</h3>
            <h4>{props.description}</h4>

        </div>
    );
};

PercentBox.defaultProps = {
    number: '',
    description: ''
};