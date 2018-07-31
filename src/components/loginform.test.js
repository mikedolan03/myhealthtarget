import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from './loginform';

describe('<LoginForm />', () => { 

	let wrapper;
	const dispatch = jest.fn();
		const handleSubmit = jest.fn();


	beforeEach(() => {

		wrapper = shallow(<LoginForm dispatch={dispatch} handleSubmit={handleSubmit} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 