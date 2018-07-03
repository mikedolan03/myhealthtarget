import React from 'react';

//import './foodlistitem.css';

export default function FoodListItem(props) {
    return (
        <div className="food-list-item">
            {props.name} - {props.tags} - {props.date} at {props.time}
        </div>
    );
};

FoodListItem.defaultProps = {
    name: '',
    tags: '',
    date: '',
    time: ''
};