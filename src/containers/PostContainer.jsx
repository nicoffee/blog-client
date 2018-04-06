// @flow

import * as React from "react";
import { connect } from "react-redux";
import { fetchPostInfo, fetchPostComments } from "../actions";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Loader from "../components/Loader";

type Props = {
  fetchPostInfo: Function
};

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfo(this.props.match.params.postId);
    this.props.fetchPostComments(this.props.match.params.postId);
  }

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    console.log("this.props.info", this.props);

    return (
      <div>
        <Post
          id={this.props.info.id}
          title={this.props.info.title}
          body={this.props.info.body}
          img="https://picsum.photos/600/300/?random"
        />
        <div>
          {this.props.comments.map(comment => (
            <Comment key={comment.id} name={comment.name} body={comment.body} />
          ))}
        </div>
        {/* <Comments/> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
  comments: state.post.comments
});

export default connect(mapStateToProps, { fetchPostInfo, fetchPostComments })(PostContainer);
