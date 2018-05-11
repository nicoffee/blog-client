import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import PostList from '../containers/PostList';
import Post from '../containers/Post';
import PostEdit from '../containers/PostEdit';
import PostCreate from '../containers/PostCreate';

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route component={PostList} exact path="/"  />
        <Route component={Post} exact path="/post/:postId"  />
        <Route component={PostEdit} exact path="/post/:postId/edit"  />
        <Route component={PostCreate} exact path="/new"  />
      </Layout>
    </Router>
  </Provider>
);

export default App;
