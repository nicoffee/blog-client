// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {openModal} from '../modules/app';
import {
  fetchPostRequest,
  fetchPostCommentsRequest,
  deletePostRequest,
  toggleLikeRequest,
  getErrorMessage,
} from '../modules/post';
import {getIsLiked, getisAuthor, getLikesCount} from '../modules/post';
import {getUserName} from '../modules/user';
import Post from '../components/Post';
import Loader from '../ui/Loader';
import Error from '../components/Error';

export type Props = {
  fetchPostRequest: Function,
  fetchPostCommentsRequest: Function,
  toggleLikeRequest: Function,
  openModal: Function,
  toggleLike: Function,
  isAuthor: boolean,
  isFetching: boolean,
  isLiked: boolean,
  isUserLogged: boolean,
  info: {
    id: string,
    title: string,
    body: string,
    picture: string,
    likes: Array,
  },
  comments: Array<{id: string, body: string, name: string}>,
  match: Match,
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    const {postId} = this.props.match.params;

    this.props.fetchPostRequest(postId);
    // this.props.fetchPostCommentsRequest(postId);
  }

  render() {
    const {isFetching, errorMessage} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return <Error errorMessage={errorMessage} request={fetchPostRequest} />;
    }

    return <Post {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.data,
  isAuthor: getisAuthor(state),
  isLiked: getIsLiked(state),
  likesCounts: getLikesCount(state),
  isUserLogged: !!getUserName(state),
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps, {
  fetchPostRequest,
  fetchPostCommentsRequest,
  deletePostRequest,
  toggleLikeRequest,
  openModal,
})(PostContainer);
