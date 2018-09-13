// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {createPostRequest, getIsCreated} from '../modules/post';
import {getUserName, getUserId} from '../modules/user';
import LoadablePostForm from '../components/LoadablePostForm';
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
    const {isFetching, isCreated, user, info} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!user.name) {
      return <p>You need to sign in order to write new post</p>;
    }

    if (isCreated) {
      return <Redirect to={`/post/${info._id}`} />;
    }

    return <LoadablePostForm handleSubmit={this.submitForm.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  isCreated: getIsCreated(state),
  info: state.post.data,
  user: {
    id: getUserId(state),
    name: getUserName(state),
  },
});

export default connect(
  mapStateToProps,
  {
    createPostRequest,
  }
)(PostContainer);
