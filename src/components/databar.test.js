import React from 'react';
import {shallow} from 'enzyme';

import DataBar from './databar';

describe('<DataBar />', () => { 

	

 it('Renders without crashing', () => {

     shallow(<DataBar />)
    });

}); 