import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

test('renderer Header correctly test', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
