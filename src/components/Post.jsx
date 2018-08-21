// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import type Props from '../containers/Post';
import Modal from '../containers/Modal';
import RoundedButton from '../ui/RoundedButton';
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

const ActionsBlockWrapper = styled.div`
  position: absolute;
  left: -80px;
`;

const ActionsBlock = styled.div`
  position: fixed;
  top: 50%;

  button {
    margin-bottom: 10px;
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
      this.props.toggleLikeRequest(id, !this.props.isLiked);
      return;
    }

    this.props.openModal();
  };

  render() {
    const {info, isAuthor, isLiked, isModalOpen} = this.props;
    const {title, body, picture, _id, likes} = info;

    return (
      <React.Fragment>
        {isModalOpen && (
          <Modal
            type={'confirm'}
            confirmAction={() => this.props.deletePostRequest(_id)}
          />
        )}
        <StyledPost>
          <h2>{title}</h2>
          {picture && <PreviewImage background={picture} />}
          <p>{body}</p>
          <ActionsBlockWrapper>
            <ActionsBlock>
              <RoundedButton
                active={isLiked}
                color="red"
                onClick={() => this.handleLikeClick(_id)}>
                <HeartIcon />
              </RoundedButton>
              {isAuthor && (
                <React.Fragment>
                  <Link to={`/post/${_id}/edit`}>
                    <RoundedButton color="green">
                      <PencilIcon />
                    </RoundedButton>
                  </Link>
                  <RoundedButton
                    danger
                    onClick={() => this.props.openModal('confirm')}>
                    <TrashIcon />
                  </RoundedButton>
                </React.Fragment>
              )}
            </ActionsBlock>
          </ActionsBlockWrapper>
        </StyledPost>
      </React.Fragment>
    );
  }
}

export default Post;
