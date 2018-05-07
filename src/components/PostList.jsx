// @flow

import * as React from 'react';
import styled from 'styled-components';
import PostPreviw from './PostPreview';

const StyledDiv = styled.div`
  display: grid;
  grid-gap: 50px 25px;
  grid-template-columns: 1fr 1fr;
`;

type Props = {
  posts: Array<{title: string, body: string, picture: string, id: string}>,
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
