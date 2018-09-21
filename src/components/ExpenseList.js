import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="page-expense__header">
            <div>Expense</div>
            <div>Amount</div>
        </div>
        <div className="page-expense_body">
            {
                props.expenses.length === 0 ? (
                    <div className="page-expense__item  page-expense__item--message">
                        <span>No Expenses</span>                
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)        
    };
};

export default connect(mapStateToProps)(ExpenseList); 