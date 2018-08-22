// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchSessionRequest} from '../modules/user';
import App from '../components/App';

type Props = {
  fetchSessionRequest: Function,
};

class AppContainer extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchSessionRequest();
  }

  render() {
    // if (this.props.isFetching) {
    //   return <h1>isFetching</h1>;
    // }

    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.app.isFetching,
});

export default connect(
  mapStateToProps,
  {
    fetchSessionRequest,
  }
)(AppContainer);
