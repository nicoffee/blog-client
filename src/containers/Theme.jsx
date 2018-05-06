// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getCurrentTheme} from '../reducers/app';
import Theme from '../components/Theme';

const ThemeContainer = props => <Theme {...props} />;

const mapStateToProps = state => ({
  theme: getCurrentTheme(state),
});

export default withRouter(connect(mapStateToProps)(ThemeContainer));
