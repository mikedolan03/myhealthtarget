import React from 'react';
import {shallow} from 'enzyme';

import {SymptomPickerModal} from './symptompickermodal';

describe('<SymptomPickerModal />', () => { 

	let wrapper;
		const dispatch = jest.fn();


	beforeEach(() => {

		wrapper = shallow(<SymptomPickerModal dispatch={dispatch}/>)

	})

 it('Renders without crashing', () => {

 		console.log('wrapper', wrapper);
     
        expect(wrapper.length).toEqual(1)
    });

}); 