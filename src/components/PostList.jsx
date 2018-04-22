// @flow

import * as React from 'react';
import styled from 'styled-components';
import PostPreviw from './PostPreview';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 25px;
`;

type Props = {
  posts: Array<{title: string, body: string, id: number}>,
};

const PostsList = (props: Props) => (
  <StyledDiv>
    {props.posts.map(post => (
      <PostPreviw
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        img={post.picture}
      />
    ))}
  </StyledDiv>
);

export default PostsList;
