// @flow

import * as React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import PostList from "../components/PostList";
import Loader from "../components/Loader";

type Props = {
  fetchPosts: Function,
  posts: Array<{ title: string, body: string, id: number }>
};

class PostListContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    return <PostList posts={this.props.posts} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(PostListContainer);
