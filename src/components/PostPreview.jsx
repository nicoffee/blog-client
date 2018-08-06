// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {formatDate} from '../utils/helpers';
import type {post} from '../containers/PostList';
import * as variables from '../styleVariables';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${variables.BASIC_PADDING};
  border-radius: ${variables.BASIC_BORDER_RADIUS};
  transition: box-shadow ${variables.BASIC_ANIMATION_PRESET};

  &:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
  }

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

const PostPreviw = (props: post) => (
  <Link to={`post/${props._id}`}>
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
