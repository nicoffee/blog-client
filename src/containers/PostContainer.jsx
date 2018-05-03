// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchPostInfoRequest, fetchPostCommentsRequest} from '../actions';
import Post from '../components/Post';
import Comment from '../components/Comment';
import Loader from '../components/Loader';

type Props = {
  fetchPostInfoRequest: Function,
  fetchPostCommentsRequest: Function,
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfoRequest(this.props.match.params.postId);
    this.props.fetchPostCommentsRequest(this.props.match.params.postId);
  }

  render() {
    const {isFetching, info} = this.props;

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
});

export default connect(mapStateToProps, {
  fetchPostInfoRequest,
  fetchPostCommentsRequest,
})(PostContainer);
