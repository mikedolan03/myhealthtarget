import React from 'react';
import {shallow} from 'enzyme';

import {SymptomList} from './symptomlist';

describe('<SymptomList />', () => { 

	let wrapper;
	let foodList ={};
	foodList.daylist=[];
	


	beforeEach(() => {

		wrapper = shallow(<SymptomList foodList={foodList} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 