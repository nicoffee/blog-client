import * as React from 'react';
import {connect} from 'react-redux';
import {getisModalOpen} from '../reducers/modal';
import Layout from '../components/Layout';

const LayoutContainer = props => <Layout {...props} />;

const mapStateToProps = state => ({
  isModalOpen: getisModalOpen(state),
});

export default connect(mapStateToProps)(LayoutContainer);
