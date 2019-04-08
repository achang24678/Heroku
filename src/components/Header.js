import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={props.startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

//original NavLink code:
//  <header>
// <h1>Expensify</h1>
// <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
// <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
// <button onClick={props.startLogout}>Logout</button>
// </header>


const mapDispatchToProps = (dispatch) => ({   //implicitly return
  startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);
// we don't need state so leave undefined at the first spot




// when user reading and writing from expenses, We want to go to users/userID/expenses
// const db = {
//   user: {
//     uidnum: {
//       expenses: {
//         asdf: {

//         }
//       }
//     }
//   }
// };