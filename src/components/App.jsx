import * as React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/Layout';
import PostList from '../containers/PostList';
import Post from '../containers/Post';
import PostEdit from '../containers/PostEdit';
import PostCreate from '../containers/PostCreate';
import history from '../history';

const App = ({store}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route component={PostList} exact path="/" />
          <Route component={Post} exact path="/post/:postId" />
          <Route component={PostEdit} exact path="/post/:postId/edit" />
          <Route component={PostCreate} exact path="/new" />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default App;
