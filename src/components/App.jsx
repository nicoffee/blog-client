import * as React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/Layout';
import PostList from '../containers/PostList';
import SearchedPostList from '../containers/SearchedPostList';
import Post from '../containers/Post';
import PostEdit from '../containers/PostEdit';
import PostCreate from '../containers/PostCreate';
import history from '../utils/history';

const App = ({store}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route component={PostList} exact path="/" />
          <Route component={SearchedPostList} exact path="/search" />
          <Route component={Post} exact path="/post/:postId" />
          <Route component={PostEdit} exact path="/post/:postId/edit" />
          <Route component={PostCreate} exact path="/new" />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default App;
