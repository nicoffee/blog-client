import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import PostList from '../containers/PostList';
import Post from '../containers/Post';
import PostEdit from '../containers/PostEdit';

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={PostList} />
        <Route exact path="/:postId" component={Post} />
        <Route path="/:postId/edit" component={PostEdit} />
      </Layout>
    </Router>
  </Provider>
);

export default App;
