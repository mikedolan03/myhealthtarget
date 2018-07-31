import React from 'react';
import {shallow} from 'enzyme';

import FoodListItem from './foodlistitem';

describe('<FoodListItem />', () => { 

 it('Renders without crashing', () => {
     
        shallow(<FoodListItem />);
    });

}); 
