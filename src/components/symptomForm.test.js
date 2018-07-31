import React from 'react';
import {shallow} from 'enzyme';

import {SymptomForm} from './symptomForm';

describe('<SymptomForm />', () => { 

	let wrapper;
	const handleSubmit = jest.fn();
		const dispatch = jest.fn();


	beforeEach(() => {

		wrapper = shallow(<SymptomForm handleSubmit={handleSubmit} dispatch={dispatch}/>)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 