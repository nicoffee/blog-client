// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {formatDate} from '../utils/helpers';
import type {post} from '../containers/PostList';

const StyledPost = styled.div`
  display: grid;
  padding: ${props => props.theme.basicPadding};
  border-radius: ${props => props.theme.basicBorderRadius};
  grid-gap: 10px;
  grid-template-columns: 3fr 1fr;
  transition: box-shadow ${props => props.theme.basicAnimationPreset};

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
      <div>
        <h1>{props.title}</h1>
        <p>{props.body.slice(0, 100)}</p>
        <span>{props.author.name}</span>
        <span>{formatDate(props.published)}</span>
      </div>
      <div>{props.picture && <PreviewImage background={props.picture} />}</div>
    </StyledPost>
  </Link>
);

export default PostPreviw;
