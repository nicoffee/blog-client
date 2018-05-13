// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {formatDate} from '../utils/helpers';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25em 1em;

  h1 {
    font-size: 20px;
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
  picture: string,
  published: string,
  author: {
    name: string,
  },
};

const PostPreviw = (props: Props) => (
  <Link to={`post/${props.id}`}>
    <StyledPost>
      {props.picture && <PreviewImage background={props.picture} />}
      <h1>{props.title}</h1>
      <p>{props.body.slice(0, 100)}</p>
      <span>{props.author.name}</span>
      <span>{formatDate(props.published)}</span>
    </StyledPost>
  </Link>
);

export default PostPreviw;
