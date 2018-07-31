import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from './landingpage';

describe('<LandingPage />', () => { 

	let wrapper;
	

	beforeEach(() => {

		wrapper = shallow(<LandingPage />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 