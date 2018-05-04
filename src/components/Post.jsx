// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import likeIcon from './../images/like.svg';

const StyledPost = styled.div`
  position: relative;
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

const LikeBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  width: 20px;
  height: 20px;

  span {
    font-weight: 100;
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
  id: string,
  title: string,
  img: string,
  body: string,
  likes: number,
};

const Post = (props: Props) => (
  <StyledPost>
    <h1>{props.title}</h1>
    <PreviewImage background={props.img} />
    <p>{props.body}</p>
    <Link to={`${props.id}/edit`}>Edit</Link>
    <LikeBlock>
      <img src={likeIcon} />
      <span>{props.likes}</span>
    </LikeBlock>
  </StyledPost>
);

export default Post;
