// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchPostInfoRequest, fetchPostComments} from '../actions';
import Post from '../components/Post';
import Comment from '../components/Comment';
import Loader from '../components/Loader';

type Props = {
  fetchPostInfoRequest: Function,
  fetchPostComments: Function,
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfoRequest(this.props.match.params.postId);
    // this.props.fetchPostComments(this.props.match.params.postId);
  }

  render() {
    console.log('this.props', this.props);

    if (this.props.isFetching) {
      return <Loader />;
    }

    return (
      <div>
        <Post
          id={this.props.info.id}
          title={this.props.info.title}
          body={this.props.info.body}
          img={this.props.info.picture}
        />
        {/* <div>
          {this.props.comments.map(comment => (
            <Comment key={comment.id} name={comment.name} body={comment.body} />
          ))}
        </div> */}
        {/* <Comments/> */}
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
  fetchPostComments,
})(PostContainer);
