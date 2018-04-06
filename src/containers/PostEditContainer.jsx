// @flow

import * as React from "react";
import { connect } from "react-redux";
import { fetchPostInfo, editPostInfo } from "../actions";
import PostEdit from "../components/PostEdit";
import Loader from "../components/Loader";

type Props = {
  fetchPosts: Function,
  posts: Array<{ title: string, body: string, id: number }>
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfo(this.props.match.params.postId);
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
        img="https://picsum.photos/600/300/?random"
        editPost={this.props.editPostInfo}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info
});

export default connect(mapStateToProps, { fetchPostInfo, editPostInfo })(PostContainer);
