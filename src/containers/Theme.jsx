// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getCurrentTheme} from '../modules/app';
import Theme from '../ui/Theme';

const ThemeContainer = props => <Theme {...props} />;

const mapStateToProps = state => ({
  theme: getCurrentTheme(state),
});

export default withRouter(connect(mapStateToProps)(ThemeContainer));
