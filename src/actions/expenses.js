import uuid from 'uuid';
import database from '../firebase/firebase';
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

//async actions:
// component calls action generator
// action generator returns function
// component dispatches function
// function runs (has the ability to dispatch other acitons and do whatever it wants)


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {  //add data into firebase
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return(dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {   //if we want to return some promises, we put return in fron and attach then call
      dispatch(removeExpense({ id }));  //finally we dispatch removeExpense to remove data locally stored in the store after removing the one lives on firebase
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {  //return make sure after startEditExpense, we can then run the code dispatch(editExpense(id, updates)))
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES - we get the array back from firebase, and we set it then we're done
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});


export const startSetExpenses = () => { //fecth data from firebase then dispatch the setExpenses action
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {  //****return here makes sure to return promises back to app.js in order to run ReactDOM.render(jsx...........)
      const expenses = [];  //create new array

      snapshot.forEach((childSnapshot) => {   // iterate through datas
        expenses.push({           //parse data into this new array
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));  //dispatch set_expenses, so the data actually changes
    });
  };
};

