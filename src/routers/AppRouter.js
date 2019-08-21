import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/pages/Header";
import DashboardPage from "../components/pages/DashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={ DashboardPage } exact={ true } />
      <Route path="/create" component={ AddExpensePage } />
      <Route path="/edit/:id" component={ EditExpensePage } />
      <Route path="/help" component={ HelpPage } />
      <Route component={ NotFoundPage } />} />
    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
