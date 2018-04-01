// @flow

import * as React from "react";
import { connect } from "react-redux";
import { fetchPostInfo } from "../actions";
import Post from "../components/Post";

type Props = {
  fetchPostInfo: Function
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfo(this.props.match.params.postId);
  }

  render() {
    if (this.props.isFetching) {
      return <div>Fetching...</div>;
    }

    return (
      <Post
        id={this.props.info.id}
        title={this.props.info.title}
        body={this.props.info.body}
        img="https://picsum.photos/600/300/?random"
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info
});

export default connect(mapStateToProps, { fetchPostInfo })(PostContainer);
