import React from 'react';
import {shallow} from 'enzyme';

import {TopFoodsList} from './topfoodslist';

describe('<TopFoodsList />', () => { 

	let wrapper;
	let foodList ={};
	foodList.foodCounts=[];

	beforeEach(() => {

		wrapper = shallow(<TopFoodsList foodList={foodList} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 