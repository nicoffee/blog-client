// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {createPostRequest} from '../actions';
import {getUserName, getUserId} from '../reducers/user';
import PostForm from '../components/PostForm';
import Loader from '../components/Loader';

type Props = {
  createPostRequest: Function,
  isFetching: boolean,
  user: {
    id: string,
    name: string,
  },
};

class PostContainer extends React.Component<Props> {
  submitForm(e, data) {
    e.preventDefault();

    /* In real app this should be done on server-side */
    data.author = this.props.user;
    data.published = new Date().toString();
    data.likes = 0;
    /* -------------------------------------------- */

    debugger;

    this.props.createPostRequest(data);
  }

  render() {
    const {isFetching, user} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!user.name) {
      return <h1>You need to sign in in order to write new post</h1>;
    }

    return <PostForm handleSubmit={this.submitForm.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
  user: {
    id: getUserId(state),
    name: getUserName(state),
  },
});

export default connect(mapStateToProps, {
  createPostRequest,
})(PostContainer);
