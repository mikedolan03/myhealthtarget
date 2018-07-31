import React from 'react';
import './symptomlistitem.css';
let moment = require('moment');
moment().format();

export default function SymptomListItem(props) {

	//let date = moment(props.date).format('MM-DD'); 

    return (
        <div className="symptom-list-item">
          At <span className="purple-text">{props.time}</span> had <span className="orange-text">{props.name}</span>.
        </div>
    );
};

SymptomListItem.defaultProps = {
    name: '',
    severity: '',
    date: '',
    time: ''
};