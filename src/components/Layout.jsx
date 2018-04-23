import * as React from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';
import PostListContainer from '../containers/PostListContainer';
import PostContainer from '../containers/PostContainer';
import PostEditContainer from '../containers/PostEditContainer';

const Layout = () => (
  <React.Fragment>
    <Header />
    <Route exact path="/" component={PostListContainer} />
    <Route exact path="/:postId" component={PostContainer} />
    <Route path="/:postId/edit" component={PostEditContainer} />
  </React.Fragment>
);

export default Layout;
