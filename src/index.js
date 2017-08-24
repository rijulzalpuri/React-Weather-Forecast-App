import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './modules/app/';
import { render } from 'react-dom'

render(
  <Router history={history}>
    {routes}
  </Router>,
  document.getElementById('root'));
