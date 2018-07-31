import React from 'react';
import {shallow} from 'enzyme';

import {SignUpForm} from './signup-form';

describe('<SignUpForm />', () => { 

	let wrapper;
	const dispatch = jest.fn();
		const handleSubmit = jest.fn();


	beforeEach(() => {

		wrapper = shallow(<SignUpForm dispatch={dispatch} handleSubmit={handleSubmit} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 