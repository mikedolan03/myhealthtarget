import React from 'react';
import './symptomlistitem.css';
let moment = require('moment');
moment().format();

export default function SymptomListItem(props) {

	let date = moment(props.date).format('MM-DD'); 

    return (
        <div className="symptom-list-item">
          On <span className="purple-text">{date}</span> had <span className="orange-text">{props.name}</span>.
        </div>
    );
};

SymptomListItem.defaultProps = {
    name: '',
    severity: '',
    date: '',
    time: ''
};