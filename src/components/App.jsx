// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostList from './PostList';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <h1>Hello world!</h1>
      <PostList/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
