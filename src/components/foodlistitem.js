import React from 'react';

//import './foodlistitem.css';

export default function FoodListItem(props) {

if(props.showTags) { 

	 return (
        <div className="food-list-item">
            {props.name} - {props.tags}
        </div>
    );

} else {

	 return (
        <div className="food-list-item">
            {props.name}
        </div>
    );

}

};

FoodListItem.defaultProps = {
    name: '',
    tags: '',
    date: '',
    time: ''
};