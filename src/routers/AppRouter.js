
import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Fisher from '../components/Fisher';


const AppRouter = () =>
(
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/" component={Fisher} exact={true}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route />
    </Switch> 
    </div>
   </BrowserRouter>
);
/* <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>   */
 // <Route path="/create" component={AddExpensePage}/>
 // <Route path="/edit/:id" component={EditExpensePage}/>
 // <Route path="/dashboard" component={MyBlog}/>

export default AppRouter;

// <Route path="/dashboard" component={ExpenseDashboardPage}/>
// <Route history={history} path="/create" component={AddExpensePage} />
// <Route path="/edit/:id" component={EditExpensePage} />
// <Route path="/help" component={HelpPage} />
// <Route component={NotFoundPage} />
// 