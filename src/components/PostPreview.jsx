// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;

  h1 {
    font-size: 20px;
  }

  a {
    color: inherit;
  }
`;

const PreviewImage = styled.div`
  height: 180px;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
`;

type Props = {
  id: string,
  title: string,
  body: string,
  img: string,
};

const PostPreviw = (props: Props) => (
  <StyledPost>
    <Link to={`post/${props.id}`}>
      <h1>{props.title}</h1>
    </Link>
    <p>{props.body.slice(0, 100)}</p>
    <PreviewImage background={props.img} />
  </StyledPost>
);

export default PostPreviw;
