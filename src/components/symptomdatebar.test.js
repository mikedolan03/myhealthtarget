import React from 'react';
import {shallow} from 'enzyme';

import {SymptomDateBar} from './symptomdatebar';

describe('<SymptomDateBar />', () => { 

	let wrapper;
	const dispatch = jest.fn();


	beforeEach(() => {

		wrapper = shallow(<SymptomDateBar dispatch={dispatch} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 