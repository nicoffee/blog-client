// @flow

import * as React from "react";
import { connect } from "react-redux";
import { fetchPostInfo } from "../actions";
import Post from "../components/Post";

type Props = {
  fetchPosts: Function,
  posts: Array<{ title: string, body: string, id: number }>
};

class PostListContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <PostList posts={this.props.posts} />;
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(PostListContainer);
