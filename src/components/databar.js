import React from 'react';

import './databar.css';

export default function DataBar(props) {

	let percent = props.percent;



    if(props.nodata == 'true') {

        return (
             
                    <div className="data-percent-container">
                    <h3>With more data, we'd tell you how often you experienced a <span className="purple-text">symptom</span> over the date range.</h3>
                    </div> 
            );

    } else { 

                if(props.symptomCount =='true') {

                    return (
                    <div className="data-percent-container">
                    <h3>You experienced <span className="purple-text">{props.symptom}</span></h3>
                    <div className="data-bar-number">{props.number}</div>
                    <h3>over the selected period.</h3> 
                    </div> ); 

                } else {

                        if(props.tagVersion =='true') {

                        return (
                        <div className="data-percent-container">
                        <h3>Tags Associated with <span className="green-text">{props.symptom}</span></h3>
                        <div>{props.description}</div>
                        </div> ); 

                        } else {

                            if(props.outOfVersion =='true') {

                            return (
                            <div className="data-percent-container">
                            <h3>You ate <span className="orange-text">{props.description}</span></h3>
                                <div className="data-bar-number">{props.number}</div>
                                <h3>out of {props.totals} the days prior to {props.symptom}</h3> 
                                </div> 
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
                       }
                    }


            }
};

DataBar.defaultProps = {
    description: '',
    number: '',
    symptom: '',
    nodata: 'false',
    symptomCount: 'false',
    tagVersion: 'false',
    outOfVersion: 'false'
};