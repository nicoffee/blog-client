// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {fetchPostRequest, updatePostRequest} from '../modules/post';
import LoadablePostForm from '../components/LoadablePostForm';
import Loader from '../ui/Loader';

type Props = {
  fetchPostRequest: Function,
  updatePostRequest: Function,
  isFetching: boolean,
  info: {
    _id: string,
    title: string,
    body: string,
    picture: string,
  },
  match: Match,
};

class PostEditContainer extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchPostRequest(this.props.match.params.postId);
  }

  submitForm(data) {
    this.props.updatePostRequest(this.props.info._id, {
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
      <LoadablePostForm
        body={info.body}
        handleSubmit={this.submitForm.bind(this)}
        id={info._id}
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

export default connect(
  mapStateToProps,
  {
    fetchPostRequest,
    updatePostRequest,
  }
)(PostEditContainer);
