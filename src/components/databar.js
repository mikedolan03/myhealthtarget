import React from 'react';

import './databar.css';

export default function DataBar(props) {

	let percent = props.percent;

    return (
    	<div className="data-bar-container">
    	<h2>You had {props.description}</h2>
        <div className="data-bar-box">
          <span style={{width: props.percent+'%'}}></span>
        </div>
        <div className="data-bar-number">{props.number}</div>
        <h2>of the time prior to {props.symptom}</h2> 
        </div> 
    );
};

DataBar.defaultProps = {
    percent: '',
    description: '',
    number: '',
    symptom: ''
};