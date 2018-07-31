import React from 'react';
import {shallow} from 'enzyme';

import {SignUp} from './signup';

describe('<SignUp />', () => { 

	let wrapper;
	const dispatch = jest.fn();
		const loggedIn = true;


	beforeEach(() => {

		wrapper = shallow(<SignUp dispatch={dispatch} loggedIn = {loggedIn} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 