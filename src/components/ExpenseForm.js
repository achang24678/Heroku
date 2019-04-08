import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '', //for editexpensePage, if props in editexpensepage exists, we paste them right at the spot
      note: props.expense ? props.expense.note : '',                //for editexpensePage, if props in editexpensepage exists, we paste them right at the spot
      amount: props.expense ? (props.expense.amount / 100).toString() : '',   //for editexpensePage, if props in editexpensepage exists, we paste them right at the spot
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),    //for editexpensePage, if props in editexpensepage exists, we paste them right at the spot
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {    //change value with user input
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {   //change value with user input
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {   //change value with user input
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {   //change value with user input
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {     // wait for submit on the entire form
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({    // pass all the user input values, sotred in state, "pass to AddExpensePage or EditExpensePage"
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
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
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
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    )
  }
}
