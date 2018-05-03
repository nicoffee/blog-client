import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import PostListContainer from '../containers/PostListContainer';
import PostContainer from '../containers/PostContainer';
import PostEditContainer from '../containers/PostEditContainer';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path="/" component={PostListContainer} />
          <Route exact path="/:postId" component={PostContainer} />
          <Route path="/:postId/edit" component={PostEditContainer} />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
