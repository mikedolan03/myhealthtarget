import React from 'react';
import {shallow} from 'enzyme';

import {DashBoard} from './dashboard';

describe('<DashBoard />', () => { 

	let wrapper;
	 const dispatch = jest.fn();

	beforeEach(() => {

		wrapper = shallow(<DashBoard dispatch={dispatch} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 