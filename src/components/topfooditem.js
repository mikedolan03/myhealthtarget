import React from 'react';

import './topfooditem.css';

export default function TopFoodItem(props) {

	 return (
        <div className="topfood-item">
            <div className="top-name">{props.name}</div><div className="data-bar-box">
          <span style={{width: props.percent+'%'}}></span>
        </div><div className="top-number">{props.count}/{props.totalDays} days</div>  
        </div>
    );


};

TopFoodItem.defaultProps = {
    name: '',
    tags: '',
    date: '',
    time: '',
    percent: '',
    count: '',
    totalDays: ''
};