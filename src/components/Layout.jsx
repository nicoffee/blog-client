import * as React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import PostListContainer from '../containers/PostListContainer';
import PostContainer from '../containers/PostContainer';
import PostEditContainer from '../containers/PostEditContainer';

const StyledDiv = styled.div`
  margin-top: 80px;
`;

const Layout = () => (
  <React.Fragment>
    <Header />
    <StyledDiv>
      <Route exact path="/" component={PostListContainer} />
      <Route exact path="/:postId" component={PostContainer} />
      <Route path="/:postId/edit" component={PostEditContainer} />
    </StyledDiv>
  </React.Fragment>
);

export default Layout;
