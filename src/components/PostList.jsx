// @flow

import * as React from 'react';
import styled from 'styled-components';
import PostPreviw from './PostPreview';
import Loader from '../ui/Loader';
import Button from '../ui/Button';
import type {post} from '../containers/PostList';

const StyledDiv = styled.div`
  width: 100%;
`;

const LoadMoreWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: ${props => props.theme.basicPadding};
`;

type Props = {
  posts: Array<post>,
  isMorePostsAvailable?: boolean,
  isFetching?: boolean,
  isMoreFetching?: boolean,
  fetchMore?: Function,
};

const PostsList = (props: Props) => (
  <StyledDiv>
    {props.posts.map(post => (
      <PostPreviw key={post._id} {...post} />
    ))}
    <LoadMoreWrapper>
      {props.isMoreFetching ? (
        <Loader />
      ) : (
        props.isMorePostsAvailable && (
          <Button onClick={props.fetchMore}>Load more</Button>
        )
      )}
    </LoadMoreWrapper>
  </StyledDiv>
);

export default PostsList;
