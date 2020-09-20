import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import 'bootstrap/dist/css/bootstrap.css';

// import history from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ExpenseDashboardPage from './ExpenseDashboardPage';
import  AddExpensePage  from './AddExpensePage';
import  EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import './fisher.css';
const astyle = {};   



const Fisher = () =>(
   <html>
    <body>
    <Router>
    <div className="container-nav">
    <nav>
      <div className="container-menu">
         <Link className="container-li" to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
         <Link className="container-li" to="/create" style={{ textDecoration: 'none' }}>Create Expenses</Link>
         <Link className="container-li" to="/edit/:id" style={{ textDecoration: 'none' }}>Edit Expenses</Link>
         <Link className="container-li" to="/help" style={{ textDecoration: 'none' }}>Help</Link>
         <Link className="container-li" to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
      </div>          
    </nav>
    
    
    <Switch>
       <Route path="/dashboard" component={ExpenseDashboardPage}>
          <ExpenseDashboardPage/>
       </Route>
       <Route path="/create" component={AddExpensePage}>
          <AddExpensePage/>
       </Route>
       <Route path="/edit/:id" component={EditExpensePage}>
          <EditExpensePage/>
       </Route>
       <Route path="/help" component={HelpPage}>
       </Route>
       <Route path="/about">
       </Route>
    </Switch>
    </div>
    </Router>

    </body>
   </html>
   
   
);

 // <Header/>
      // <ExpensesSummary/>
      // <ExpenseListFilters/>
      // <ExpenseList/>
export default Fisher;
















// <html>
//      <body>
//      <Router>
     
     
           
//      </body>
//    </html>