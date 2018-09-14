import selectExpense from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('filter by text test', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('filter by startDate test', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('filter by endDate test', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('sort by date test', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('sort by amount test', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});