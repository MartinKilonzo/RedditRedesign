require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './assets/App';
import FrontPageView from './views/FrontPageView/FrontPageView';


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={FrontPageView}></IndexRoute>
        </Route>
      </Router>
    );
  }
}

Routes.defaultProps = {};

export default Routes;
