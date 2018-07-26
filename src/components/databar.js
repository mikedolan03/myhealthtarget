import React from 'react';

import './databar.css';

export default function DataBar(props) {

	let percent = props.percent;

    if(props.nodata == 'true') {

        return (
                null
            );

    } else {

            return (
            	<div className="data-percent-container">
            	<h3>You had <span className="orange-text">{props.description}</span></h3>
                <div className="data-bar-number">{props.number}</div>
                <h3>of the time prior to {props.symptom}</h3> 
                </div> 
            );
        }
};

DataBar.defaultProps = {
    description: '',
    number: '',
    symptom: '',
    nodata: 'false'
};