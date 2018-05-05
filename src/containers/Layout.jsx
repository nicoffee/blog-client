import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {getisModalOpen} from '../reducers/modal';
import Layout from '../components/Layout';

const LayoutContainer = props => {
  console.log('propsAAA:', props);
  return <Layout {...props} />;
};

const mapStateToProps = state => ({
  isModalOpen: getisModalOpen(state),
});

export default withRouter(connect(mapStateToProps)(LayoutContainer));
