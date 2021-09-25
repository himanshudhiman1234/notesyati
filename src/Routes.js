import React from 'react'
import {

    Switch,
    Route,
    Redirect,
    useLocation,
 
  } from "react-router-dom";
import ClickingComponent from './components/Clicking/ClickingComponent';
import SubscriptionComponent from './components/Subscription/SubscriptionComponent';
import TagsComponent from './components/TagsComponent/TagsComponent';
import ArchievesPage from './pages/ArchievesPage';

import DetailPage from './pages/DetailPage';
import EmptyScreenPage from './pages/EmptyScreenPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewNotePage from './pages/NewNotePage';
import NotesScreenPage from './pages/NotesScreenPage';
import PagesPage from './pages/PagesPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { SignUpPage } from './pages/SignUpPage';
import UserPage from './pages/UserPage';

const Routes = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/detail" component={DetailPage} />
          <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
          <Route exact path="/resetPassword" component={ResetPasswordPage} />

          <Route exact path="/newNote" component={NewNotePage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/noteScreen" component={NotesScreenPage} />
          <Route exact path="/emptyScreen" component={EmptyScreenPage} />
          <Route exact path="/archives" component={ArchievesPage} />
          <Route exact path="/tags" component={TagsComponent} />
          <Route exact path="/subscription" component={SubscriptionComponent} />
          <Route exact path="/clicking" component={ClickingComponent} />

          <Route exact path="/pages" component={PagesPage} />
        </Switch>
      </div>
    );
}

export default Routes
