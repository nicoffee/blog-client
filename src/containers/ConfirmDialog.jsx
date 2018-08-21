// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {
  getCurrentTheme,
  getIsModalOpen,
  openModal,
  switchTheme,
  getAction,
} from '../modules/app';
import {fetchPostsRequest} from '../modules/posts';
import {getUserName} from '../modules/user';
import ConfirmDialog from '../components/ConfirmDialog';

const HeaderContainer = props => <ConfirmDialog {...props} />;

const mapStateToProps = state => ({
  isModalOpen: getIsModalOpen(state),
  user: getUserName(state),
  theme: getCurrentTheme(state),
  performAction: getAction(state),
});

export default connect(mapStateToProps, {
  openModal,
  switchTheme,
  fetchPostsRequest,
})(HeaderContainer);
