import React from 'react';
import {shallow} from 'enzyme';

import {FoodList} from './foodlist';

describe('<FoodList />', () => { 

	let wrapper;
	let foodList ={};
	foodList.todayList={};
	foodList.todayList.foodList = [];

	beforeEach(() => {

		wrapper = shallow(<FoodList foodList={foodList} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 