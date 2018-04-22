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
  width: 300px;
  background: transparent;

  h1 {
    font-size: 20px;
  }

  p {
    color: rgba(0, 0, 0, 0.54);
  }
`;

type Props = {
  id: number,
  title: string,
  img: string,
};

const PostPreviw = (props: Props) => (
  <StyledPost>
    <Link to={`/${props.id}`}>
      <h1>{props.title}</h1>
    </Link>
    <p>{props.body}</p>
    <img src={props.img} />
  </StyledPost>
);

export default PostPreviw;
