import React from 'react';

//import './foodlistitem.css';

export default function FoodListItem(props) {

if(props.showTags) { 

	 return (
        <div className="food-list-item align-center">
            <div className="blue-text fooditemblock">Food: {props.name}</div> <div className="purple-text fooditemblock">  Tags: {props.tags}</div>
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