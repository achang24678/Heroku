import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {   //2.  then show on the page one by one using map
            return <ExpenseListItem key={expense.id} {...expense} />; //3. format each expense item here in ExpenseListItem
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {                    //we get the current expenses and filters states sotred in redux store
    expenses: selectExpenses(state.expenses, state.filters)   //1. filter out the expense items
  };
};

export default connect(mapStateToProps)(ExpenseList);
