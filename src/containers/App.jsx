// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchSessionRequest} from '../actions';
import App from '../components/App';

const AppContainer = props => <App {...props} />;

export default connect(null, {
  fetchSessionRequest
})(AppContainer);
