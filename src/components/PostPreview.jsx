// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const StyledPost = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: '#757575';
  border: 2px solid palevioletred;
`;

type Props = {
  id: number,
  title: string,
  img: string,
  body: string,
};

const PostPreviw = (props: Props) => (
  <StyledPost>
    <Link to={`/${props.id}`}>
      <h1>{props.title}</h1>
    </Link>
    <img src={props.img} />
    <p>{props.body}</p>
    <Link to={`/${props.id}`}>
      <Button primary>Read</Button>
    </Link>
  </StyledPost>
);

export default PostPreviw;
