import React from 'react';
import ExpeensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import Header from './Header';
import Fisher from './Fisher';

const ExpenseDashboardPage = () => (
    <div className="container-dashboard">
      <ExpeensesSummary/>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
);
export default ExpenseDashboardPage;