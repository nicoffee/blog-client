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
        <Route exact path="/" component={PostList} />
        <Route exact path="/post/:postId" component={Post} />
        <Route exact path="/post/:postId/edit" component={PostEdit} />
        <Route exact path="/new" component={PostCreate} />
      </Layout>
    </Router>
  </Provider>
);

export default App;
