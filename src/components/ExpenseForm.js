import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));   //state.description = description (this scope)
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));  //state.note = note (this scope)
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))   //this is an expression for filtering string input and verify that contains a number and remove decimals over X.XX- (for info search regex101.com (regular expression))
        {
            this.setState(() => ({amount}));    //state.amount = amount (this scope)
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt)   //with this check, is impossible delete the data
        {
            this.setState(() => ({createdAt}));     //state.createdAt = createdAt (this scope)
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description && !this.state.amount)
        {
            this.setState(() => ({error: 'Please provide desciption and amount.'}));                    
        }
        else if(!this.state.description && this.state.amount)
        {
            this.setState(() => ({error: 'Please provide desciption.'}));
        }
        else if(this.state.description && !this.state.amount)
        {
            this.setState(() => ({error: 'Please provide amount.'}));
        }
        else
        {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="regular-button">Save Expense</button>
                </div>
            </form>
        )
    }
}