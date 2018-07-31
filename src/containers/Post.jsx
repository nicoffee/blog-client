// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {openModal} from '../actions';
import {
  fetchPostRequest,
  fetchPostCommentsRequest,
  toggleLikeRequest,
} from '../modules/post';
import {getIsLiked} from '../reducers';
import {getUserName} from '../reducers/user';
import Post from '../components/Post';
import Loader from '../components/Loader';

export type Props = {
  fetchPostRequest: Function,
  fetchPostCommentsRequest: Function,
  toggleLikeRequest: Function,
  openModal: Function,
  toggleLike: Function,
  canEdit: boolean,
  isFetching: boolean,
  isLiked: boolean,
  isUserLogged: boolean,
  info: {
    id: string,
    title: string,
    body: string,
    picture: string,
    likes: number,
  },
  comments: Array<{id: string, body: string, name: string}>,
  match: Match,
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    const {postId} = this.props.match.params;

    this.props.fetchPostRequest(postId);
    this.props.fetchPostCommentsRequest(postId);
  }

  render() {
    const {isFetching} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return <Post {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.data,
  canEdit: state.post.data.author
    ? state.post.data.author.id === state.user.id
    : false,
  isLiked: getIsLiked(state),
  isUserLogged: !!getUserName(state),
});

export default connect(mapStateToProps, {
  fetchPostRequest,
  fetchPostCommentsRequest,
  toggleLikeRequest,
  openModal,
})(PostContainer);
