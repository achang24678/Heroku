import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  
  onSubmit = (expense) => {   // save the new edited information
    this.props.startEditExpense(this.props.expense.id, expense); // pass down to the mapDispatchProps's editExpense: then call out dispatch to stroe the edited information
    this.props.history.push('/'); //redirect to dashboard when submitted
    
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });    // remove exisiting item
    this.props.history.push('/'); //then redirect back to dasahboard
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)   //find the match by id
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),   //doing dispatch here on its own, passing in id, and expense object array, for dispatching process
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))            //doing dispatch here on its own
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
