// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {
  getCurrentTheme,
  getIsModalOpen,
  openModal,
  switchTheme,
  getIsFetching,
} from '../modules/app';
import {fetchPostsRequest} from '../modules/posts';
import {getUserName} from '../modules/user';
import Header from '../components/Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => ({
  isModalOpen: getIsModalOpen(state),
  user: getUserName(state),
  theme: getCurrentTheme(state),
  isFetching: getIsFetching(state),
});

export default connect(
  mapStateToProps,
  {
    openModal,
    switchTheme,
    fetchPostsRequest,
  }
)(HeaderContainer);
