import React from 'react';
import {shallow} from 'enzyme';

import {NavBar} from './navbar';

describe('<NavBar />', () => { 

	let wrapper;

	beforeEach(() => {

		wrapper = shallow(<NavBar />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 