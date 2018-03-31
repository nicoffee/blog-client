// @flow

import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostListContainer from '../containers/PostListContainer';

const App = ({ store: any }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={PostListContainer} />
    </Router>
  </Provider>
);

export default App;
