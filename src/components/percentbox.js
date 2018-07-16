import React from 'react';

//import './percentbox.css';

export default function PercentBox(props) {
    return (
        <div className="percent-box-container">
            <h2>{props.number}%</h2>
            <h3>{props.description}</h3>

        </div>
    );
};

PercentBox.defaultProps = {
    number: '',
    description: ''
};