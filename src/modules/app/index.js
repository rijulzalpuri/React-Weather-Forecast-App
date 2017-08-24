import React from 'react';
import { render } from 'react-dom';
import App from './components/App';;
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
// import CommentPage from './../CommentPage/';

const routes = (
      <Switch>
    <Route exact path ="/" component = {App} />
    </Switch>
        
);
export default routes;
