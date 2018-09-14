import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';

test('set start date test', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('set end date test', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('set text filter test with text value', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('set text filter test with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('sort by date test', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('sort by amount test', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});


