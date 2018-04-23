// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledPost = styled.div`
  width: 700px;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;

  h1 {
    font-size: 42px;
  }

  p {
    font-size: 20px;
    font-weight: 200;
    line-height: 25px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.84);
  }
`;

const PreviewImage = styled.div`
  width: 100%;
  height: 400px;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
`;

type Props = {
  id: number,
  title: string,
  img: string,
  body: string,
};

const Post = (props: Props) => (
  <StyledPost>
    <h1>{props.title}</h1>
    <PreviewImage background={props.img} />
    <p>{props.body}</p>
    <Link to={`${props.id}/edit`}>Edit</Link>
  </StyledPost>
);

export default Post;
