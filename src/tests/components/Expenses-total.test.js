import getExpensesTotal from '../../selectors/Expenses-total'
import expenses from '../fixtures/expenses';

test('handle date changes test', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('handle date changes test', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('handle date changes test', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});