import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import './fisher.css';
import postData from '../data/data.json';

export const ExpenseList = (props) => (
  <div className="content-list-goods">
    <div className="list-header">
      <div className="show-for-desktop" style={{"color":"blue"}}>Expense</div>
      <div className="show-for-desktop" style={{"color":"blue"}}>Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : ((
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )  ) 
      }
      {
        postData.map((data) =>{
          return <ExpenseListItem key={data.id} {...data} />;

        })
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
