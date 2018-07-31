// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {fetchPostRequest, updatePostRequest} from '../ducks/post';
import PostForm from '../components/PostForm';
import Loader from '../components/Loader';

type Props = {
  fetchPostInfoRequest: Function,
  editPostInfoRequest: Function,
  isFetching: boolean,
  info: {
    id: string,
    title: string,
    body: string,
    picture: string,
  },
  match: Match,
};

class PostEditContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostRequest(this.props.match.params.postId);
  }

  submitForm(data) {
    this.props.updatePostRequest(this.props.info.id, {
      picture: data.picture,
      title: data.title,
      body: data.body,
    });
  }

  render() {
    const {isFetching, info} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <PostForm
        body={info.body}
        handleSubmit={this.submitForm.bind(this)}
        id={info.id}
        picture={info.picture}
        title={info.title}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.data,
});

export default connect(mapStateToProps, {
  fetchPostRequest,
  updatePostRequest,
})(PostEditContainer);
