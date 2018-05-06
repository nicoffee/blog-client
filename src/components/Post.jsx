// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import likeIcon from './../images/like.svg';

const StyledPost = styled.div`
  position: relative;

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
  left: 30px;
  font-weight: 100;
  font-size: 14px;

  @media (max-width: 900px) {
    position: static;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
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
  canEdit: boolean,
};

const Post = (props: Props) => (
  <StyledPost>
    <h1>{props.title}</h1>
    <PreviewImage background={props.img} />
    <p>{props.body}</p>
    {props.canEdit && <Link to={`/post/${props.id}/edit`}>Edit</Link>}
    <LikeBlock>
      <div>
        <img src={likeIcon} />
        <span>{props.likes}</span>
      </div>
    </LikeBlock>
  </StyledPost>
);

export default Post;
