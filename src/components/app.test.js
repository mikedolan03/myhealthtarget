import React from 'react';
import {shallow} from 'enzyme';

import {App} from './app';

describe('<App />', () => { 

	let wrapper;

	beforeEach(() => {

		wrapper = shallow(<App />)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 