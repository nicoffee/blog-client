// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {
  openModal,
  fetchPostInfoRequest,
  fetchPostCommentsRequest,
  toggleLikeRequest,
} from '../actions';
import {getIsLiked} from '../reducers';
import {getUserId} from '../reducers/user';
import Post from '../components/Post';
// import Comment from '../components/Comment';
import Loader from '../components/Loader';

export type Props = {
  fetchPostInfoRequest: Function,
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
    this.props.fetchPostInfoRequest(postId);
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

// {/* <div>
//   {this.props.comments.map(comment => (
//     <Comment body={comment.body} key={comment.id} name={comment.name} />
//   ))}
// </div> */}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
  // comments: state.post.comments,
  canEdit: state.post.info.author
    ? state.post.info.author.id === state.user.id
    : false,
  isLiked: getIsLiked(state),
  isUserLogged: !!getUserId(state),
});

export default connect(mapStateToProps, {
  fetchPostInfoRequest,
  fetchPostCommentsRequest,
  toggleLikeRequest,
  openModal,
})(PostContainer);
