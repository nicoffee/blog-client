// @flow

import * as React from 'react';
import styled from 'styled-components';
import HeartIcon from '../assets/icons/Heart';
const Sidebar = styled.div`
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

const PostSidebar = ({isLiked, likesCount, postId}) => (
  <Sidebar>
    <LikeBlock isLiked={isLiked}>
      <HeartIcon />
      <div onClick={() => this.handleLikeClick(postId)}>
        <span>{likesCount}</span>
      </div>
    </LikeBlock>
  </Sidebar>
);

export default PostSidebar;
