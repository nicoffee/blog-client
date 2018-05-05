// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Match} from 'react-router-dom';
import {fetchPostInfoRequest, editPostInfoRequest} from '../actions';
import PostEdit from '../components/PostEdit';
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

class PostContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostInfoRequest(this.props.match.params.postId);
  }

  render() {
    const {isFetching, info, editPostInfoRequest} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <PostEdit
        id={info.id}
        title={info.title}
        body={info.body}
        img={info.picture}
        editPost={editPostInfoRequest}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  info: state.post.info,
});

export default connect(mapStateToProps, {
  fetchPostInfoRequest,
  editPostInfoRequest,
})(PostContainer);
