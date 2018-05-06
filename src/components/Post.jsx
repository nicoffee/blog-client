// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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

  svg {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    stroke: black;
    stroke-width: 2px;
    cursor: pointer;

    path {
      fill: ${props => (props.isLiked ? '#e53935' : 'none')};
      transition: fill 200ms ease-out;
    }

    &:hover path {
      fill: #ef9a9a;
    }
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
  isLiked: boolean,
};

const Post = (props: Props) => (
  <StyledPost>
    <h1>{props.title}</h1>
    <PreviewImage background={props.img} />
    <p>{props.body}</p>
    {props.canEdit && <Link to={`/post/${props.id}/edit`}>Edit</Link>}
    <LikeBlock isLiked={props.isLiked}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path
            d="M24.85 10.126c2.018-4.783 6.628-8.125 11.99-8.125 7.223 0 12.425 6.179 13.079 13.543 0 0 .353 1.828-.424 5.119-1.058 4.482-3.545 8.464-6.898 11.503L24.85 48 7.402 32.165c-3.353-3.038-5.84-7.021-6.898-11.503-.777-3.291-.424-5.119-.424-5.119C.734 8.179 5.936 2 13.159 2c5.363 0 9.673 3.343 11.691 8.126z"
            fill="#d75a4a"
          />
        </svg>
        <span>{props.likes}</span>
      </div>
    </LikeBlock>
  </StyledPost>
);

export default Post;
