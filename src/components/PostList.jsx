// @flow

import * as React from 'react';
import styled from 'styled-components';
import PostPreviw from './PostPreview';
import type {post} from '../containers/PostList';

const StyledDiv = styled.div`
  display: grid;
  grid-gap: 50px 25px;
  grid-template-columns: 1fr 1fr;
`;

type Props = {
  posts: Array<post>,
};

const PostsList = (props: Props) => (
  <StyledDiv>
    {props.posts.map(post => <PostPreviw key={post._id} {...post} />)}
  </StyledDiv>
);

export default PostsList;
