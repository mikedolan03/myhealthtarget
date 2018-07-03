import React from 'react';

//import './symptomlist.css';

export default function SymptomList(props) {
    return (
        <div className="symptom-list">
            {props.name} - {props.severity} - {props.date} at {props.time}
        </div>
    );
};

SymptomList.defaultProps = {
    name: '',
    severity: '',
    date: '',
    time: ''
};