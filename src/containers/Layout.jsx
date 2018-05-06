// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getCurrentTheme} from '../reducers/app';
import {getisModalOpen} from '../reducers/modal';
import {switchTheme} from '../actions';
import Layout from '../components/Layout';

const LayoutContainer = props => <Layout {...props} />;

const mapStateToProps = state => ({
  isModalOpen: getisModalOpen(state),
  theme: getCurrentTheme(state),
});

export default withRouter(
  connect(mapStateToProps, {switchTheme})(LayoutContainer)
);
