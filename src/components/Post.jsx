// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './Styled';
import * as variables from '../constants/style-variables';
import type Props from '../containers/Post';

const StyledPost = styled.div`
  position: relative;
  width: 100%;

  p {
    font-size: 20px;
    font-weight: 200;
    line-height: 25px;
  }
`;

const LikeBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 30px;
  font-size: 14px;
  font-weight: 100;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  svg {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
    stroke: black;
    stroke-width: 1px;
    transition: fill 200ms ease-out;

    path {
      fill: ${props => (props.isLiked ? '#e53935' : 'transparent')};
      transition: fill 200ms ease-out;
    }

    &:hover path {
      fill: ${variables.COLOR_RED_400};
    }
  }

  @media (max-width: 900px) {
    position: static;
  }
`;

const PreviewImage = styled.div`
  width: 100%;
  height: 400px;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
`;

class Post extends React.PureComponent<Props> {
  handleLikeClick = (id: string) => {
    if (this.props.isUserLogged) {
      this.props.toggleLikeRequest(id);
      return;
    }

    this.props.openModal();
  };

  render() {
    const {info, canEdit, isLiked} = this.props;
    const {title, body, picture, likes, id} = info;

    return (
      <StyledPost>
        <h2>{title}</h2>
        {picture && <PreviewImage background={picture} />}
        <p>{body}</p>
        {canEdit && (
          <Link to={`/post/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
        )}
        <LikeBlock isLiked={isLiked}>
          <div onClick={() => this.handleLikeClick(id)}>
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.85 10.126c2.018-4.783 6.628-8.125 11.99-8.125 7.223 0 12.425 6.179 13.079 13.543 0 0 .353 1.828-.424 5.119-1.058 4.482-3.545 8.464-6.898 11.503L24.85 48 7.402 32.165c-3.353-3.038-5.84-7.021-6.898-11.503-.777-3.291-.424-5.119-.424-5.119C.734 8.179 5.936 2 13.159 2c5.363 0 9.673 3.343 11.691 8.126z"
                fill="#d75a4a"
              />
            </svg>
            <span>{likes}</span>
          </div>
        </LikeBlock>
      </StyledPost>
    );
  }
}

export default Post;
