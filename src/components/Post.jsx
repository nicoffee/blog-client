// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import type Props from '../containers/Post';
import HeartIcon from '../assets/icons/Heart';
import PencilIcon from '../assets/icons/Pencil';
import TrashIcon from '../assets/icons/Trash';

const StyledPost = styled.div`
  position: relative;
  width: 100%;

  p {
    font-size: ${props => props.theme.largeFontSize};
    font-weight: ${props => props.theme.basicFontWeight};
    line-height: ${props => props.theme.basicLineHeight};
  }
`;

const LikeBlockWrapper = styled.div`
  position: absolute;
  left: -80px;
`;

const LikeBlock = styled.div`
  position: fixed;
  top: 50%;
  font-size: ${props => props.theme.smallFontSize};
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
    transition: fill ${props => props.theme.basicAnimationPreset};

    path {
      fill: ${props =>
        props.isLiked ? props.theme.errorColor : 'transparent'};
      transition: fill ${props => props.theme.basicAnimationPreset};
    }

    &:hover path {
      fill: ${props => props.theme.redColorHover};
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

const RoundedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.1px solid ${props => props.theme.buttonRoundedBorderColor};
  height: 40px;
  width: 40px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.buttonRoundedBorderColor};
    stroke-width: 1px;
  }

  ${props =>
    props.danger &&
    css`
      background-color: ${props.theme.buttonDangerBgColor};
      border-color: ${props.theme.buttonDangerBgColor};

      svg {
        stroke: ${props => props.theme.buttonsBgColor};
        fill: ${props => props.theme.buttonsBgColor};
      }
    `};
`;

// path {
//   fill: ${props =>
//     props.isLiked ? props.theme.errorColor : 'transparent'};
//   transition: fill ${props => props.theme.basicAnimationPreset};
// }

// &:hover path {
//   fill: ${props => props.theme.redColorHover};
// }

class Post extends React.PureComponent<Props> {
  handleLikeClick = (id: string) => {
    if (this.props.isUserLogged) {
      this.props.toggleLikeRequest(id, !this.props.isLiked);
      return;
    }

    this.props.openModal();
  };

  render() {
    const {info, canEdit, isLiked} = this.props;
    const {title, body, picture, _id, likes} = info;

    return (
      <StyledPost>
        <h2>{title}</h2>
        {picture && <PreviewImage background={picture} />}
        <p>{body}</p>
        {canEdit && (
          <Link to={`/post/${_id}/edit`}>
            <Button>Edit</Button>
          </Link>
        )}
        <LikeBlockWrapper>
          <LikeBlock isLiked={isLiked}>
            <div onClick={() => this.handleLikeClick(_id)}>
              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.85 10.126c2.018-4.783 6.628-8.125 11.99-8.125 7.223 0 12.425 6.179 13.079 13.543 0 0 .353 1.828-.424 5.119-1.058 4.482-3.545 8.464-6.898 11.503L24.85 48 7.402 32.165c-3.353-3.038-5.84-7.021-6.898-11.503-.777-3.291-.424-5.119-.424-5.119C.734 8.179 5.936 2 13.159 2c5.363 0 9.673 3.343 11.691 8.126z"
                  fill="#d75a4a"
                />
              </svg>
              <span>{likes.length}</span>
            </div>
          </LikeBlock>
        </LikeBlockWrapper>
      </StyledPost>
    );
  }
}

export default Post;
