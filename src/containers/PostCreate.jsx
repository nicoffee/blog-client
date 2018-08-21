// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {createPostRequest} from '../modules/post';
import {getUserName, getUserId} from '../modules/user';
import PostForm from '../components/PostForm';
import Loader from '../ui/Loader';

type Props = {
  createPostRequest: Function,
  isFetching: boolean,
  user: {
    id: string,
    name: string,
  },
};

class PostContainer extends React.PureComponent<Props> {
  submitForm(data) {
    this.props.createPostRequest(data);
  }

  render() {
    const {isFetching, user} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!user.name) {
      return <p>You need to sign in order to write new post</p>;
    }

    return <PostForm handleSubmit={this.submitForm.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.data,
  user: {
    id: getUserId(state),
    name: getUserName(state),
  },
});

export default connect(mapStateToProps, {
  createPostRequest,
})(PostContainer);
