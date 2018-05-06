// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {fetchPostInfoRequest, fetchPostCommentsRequest} from '../actions';
import {getIsLiked} from '../reducers';
import Post from '../components/Post';
import Comment from '../components/Comment';
import Loader from '../components/Loader';

type Props = {
  fetchPostInfoRequest: Function,
  fetchPostCommentsRequest: Function,
  canEdit: boolean,
  isFetching: boolean,
  isLiked: boolean,
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
    const {isFetching, isLiked, canEdit, info} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <div>
        <Post
          id={info.id}
          title={info.title}
          body={info.body}
          img={info.picture}
          likes={info.likes}
          canEdit={canEdit}
          isLiked={isLiked}
        />
        <div>
          {this.props.comments.map(comment => (
            <Comment key={comment.id} name={comment.name} body={comment.body} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
  comments: state.post.comments,
  canEdit: state.post.info.author
    ? state.post.info.author.id === state.user.id
    : false,
  isLiked: getIsLiked(state),
});

export default connect(mapStateToProps, {
  fetchPostInfoRequest,
  fetchPostCommentsRequest,
})(PostContainer);
