import React from 'react';
import {shallow} from 'enzyme';

import TopFoodItem from './topfooditem';

describe('<TopFoodItem />', () => { 

 it('Renders without crashing', () => {
     
        shallow(<TopFoodItem />);
    });

}); 
