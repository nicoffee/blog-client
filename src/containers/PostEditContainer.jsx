// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchPostInfoRequest, editPostInfoRequest} from '../actions';
import PostEdit from '../components/PostEdit';
import Loader from '../components/Loader';

type Props = {
  fetchPosts: Function,
  posts: Array<{title: string, body: string, id: number}>,
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfoRequest(this.props.match.params.postId);
  }

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    return (
      <PostEdit
        id={this.props.info.id}
        title={this.props.info.title}
        body={this.props.info.body}
        img={this.props.info.picture}
        editPost={this.props.editPostInfoRequest}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
});

export default connect(mapStateToProps, {
  fetchPostInfoRequest,
  editPostInfoRequest,
})(PostContainer);
