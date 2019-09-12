import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from 'history'

import DashboardPage from "../components/pages/DashboardPage"
import AddExpensePage from "../components/pages/AddExpensePage"
import EditExpensePage from "../components/pages/EditExpensePage"
import NotFoundPage from "../components/pages/NotFoundPage"
import LoginPage from "../components/pages/LoginPage"
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={ LoginPage } exact={ true } />
        <PrivateRoute path="/dashboard" component={ DashboardPage } />
        <PrivateRoute path="/create" component={ AddExpensePage } />
        <PrivateRoute path="/edit/:id" component={ EditExpensePage } />
        <Route component={ NotFoundPage } />} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
