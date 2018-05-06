// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserBlock from '../components/UserBlock';
import {switchTheme} from '../actions';

const LayoutContainer = props => <UserBlock {...props} />;

export default withRouter(connect(null, {switchTheme})(LayoutContainer));
