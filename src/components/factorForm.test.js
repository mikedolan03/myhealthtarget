import React from 'react';
import {shallow} from 'enzyme';

import {FactorForm} from './factorForm';

describe('<FactorForm />', () => { 

	let wrapper;
	const handleSubmit = jest.fn();

	beforeEach(() => {

		wrapper = shallow(<FactorForm handleSubmit={handleSubmit} />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 