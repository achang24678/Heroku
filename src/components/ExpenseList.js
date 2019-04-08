import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
            props.expenses.map((expense) => {   //2.  then show on the page one by one using map
              return <ExpenseListItem key={expense.id} {...expense} />; //3. format each expense item here in ExpenseListItem
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {                    //we get the current expenses and filters states sotred in redux store
    expenses: selectExpenses(state.expenses, state.filters)   //1. filter out the expense items
  };
};

export default connect(mapStateToProps)(ExpenseList);
