import React from 'react';
import {shallow} from 'enzyme';

import {SymptomTracker} from './symptomtracker';

describe('<SymptomTracker />', () => { 

	let wrapper;

	beforeEach(() => {

		wrapper = shallow(<SymptomTracker />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 
