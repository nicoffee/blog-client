// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchLogoutRequest} from '../actions';
import UserBlock from '../components/UserBlock';

const UserBlockContainer = props => <UserBlock {...props} />;

export default connect(null, {
  fetchLogoutRequest,
})(UserBlockContainer);