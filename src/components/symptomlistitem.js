import React from 'react';

import './symptomlistitem.css';

export default function SymptomListItem(props) {
    return (
        <div className="symptom-list-item">
            {props.name} - {props.severity} - {props.date} at {props.time}
        </div>
    );
};

SymptomListItem.defaultProps = {
    name: '',
    severity: '',
    date: '',
    time: ''
};