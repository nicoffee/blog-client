// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchLogoutRequest} from '../modules/user';
import UserBlock from '../components/UserBlock';

const UserBlockContainer = props => <UserBlock {...props} />;

export default connect(null, {
  fetchLogoutRequest,
})(UserBlockContainer);
