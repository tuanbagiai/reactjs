import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ExpenseCount, ExpensesTotal}) => {
    const ExpenseWord = ExpenseCount === 1 ? 'lần' : 'lần';
    const formattedExpensesTotal= numeral(ExpensesTotal/100).format('$0,0.00');

 return(
  <div className="container-exs">
      <h1>Đã chi {ExpenseCount} {ExpenseWord} với tổng tiền {formattedExpensesTotal}</h1>
  </div>
 );
};
const mapStateToProps =(state)=>{
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return{
     ExpenseCount:visibleExpenses.length,
     ExpensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);