// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {createPostRequest} from '../actions';
import PostForm from '../components/PostForm';
import Loader from '../components/Loader';

type Props = {
  createPostRequest: Function,
  isFetching: boolean,
};

class PostContainer extends React.Component<Props> {
  submitForm(e, data) {
    e.preventDefault();

    this.props.createPostRequest(data);
  }

  render() {
    const {isFetching} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return <PostForm handleSubmit={this.submitForm.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
});

export default connect(mapStateToProps, {
  createPostRequest,
})(PostContainer);
