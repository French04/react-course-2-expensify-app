import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('setup default filters value test', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set sortBy to amount test', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('set sortBy to date test', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('set text filter test', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('set startDate filter test', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('set endDate filter test', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});