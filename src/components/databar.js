import React from 'react';

import './databar.css';

export default function DataBar(props) {

	let percent = props.percent;

    return (
    	<div className="data-bar-container">
    	<h2>{props.description}</h2>
        <div className="data-bar-box">
          <span style={{width: props.percent+'%'}}></span>
        </div>
        <div className="data-bar-number">{props.number}</div> 
        </div> 
    );
};

DataBar.defaultProps = {
    percent: '',
    description: '',
    number: ''
};