import React from 'react';
import {shallow} from 'enzyme';

import SymptomListItem from './symptomlistitem';

describe('<SymptomListItem />', () => { 

 it('Renders without crashing', () => {
     
        shallow(<SymptomListItem />);
    });

}); 
