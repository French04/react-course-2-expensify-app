import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('correctly render ExpensesSummary with 1 expense test', () => {
    const wrapper = shallow (<ExpensesSummary expenseCunt={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('correctly render ExpensesSummary with multiple expenses test', () => {
    const wrapper = shallow (<ExpensesSummary expenseCunt={23} expensesTotal={23512340987}/>);
    expect(wrapper).toMatchSnapshot();
});