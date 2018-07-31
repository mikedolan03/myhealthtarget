import React from 'react';
import {shallow} from 'enzyme';

import {myFactorTracker} from './factortracker';

describe('<myFactorTracker />', () => { 

	let wrapper;

	beforeEach(() => {

		wrapper = shallow(<myFactorTracker />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 