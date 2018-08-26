// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  getCurrentTheme,
  getIsModalOpen,
  switchTheme,
  getModalType,
} from '../modules/app';
import Layout from '../components/Layout';

const LayoutContainer = props => <Layout {...props} />;

const mapStateToProps = state => ({
  isModalOpen: getIsModalOpen(state),
  modalType: getModalType(state),
  theme: getCurrentTheme(state),
});

export default withRouter(
  connect(mapStateToProps, {switchTheme})(LayoutContainer)
);
