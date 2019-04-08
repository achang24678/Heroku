import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// this page formats the individual expense item on the dashgboard page
// <Link to ......    linking to EditExpensePage by providing expenses item id

const ExpenseListItem = ({ id, description, amount, createdAt }) => (

  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__date">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__amount">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>

);

export default ExpenseListItem;
