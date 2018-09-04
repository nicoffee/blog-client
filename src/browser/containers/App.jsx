// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchSessionRequest} from '../modules/user';
import App from '../components/App';

type Props = {
  isFetching: boolean,
  fetchSessionRequest: Function,
};

class AppContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchSessionRequest();
  }

  render() {
    return <App {...this.props} />;
  }
}

export default connect(
  null,
  {
    fetchSessionRequest,
  }
)(AppContainer);
