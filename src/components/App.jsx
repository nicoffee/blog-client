// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostListContainer from './../containers/PostListContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={PostListContainer} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
