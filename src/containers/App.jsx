// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchSessionRequest} from '../modules/user';
import {getIsFetching} from '../modules/app';
import App from '../components/App';
import Loader from '../ui/Loader';

type Props = {
  isFetching: boolean,
  fetchSessionRequest: Function,
};

class AppContainer extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchSessionRequest();
  }

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
});

export default connect(
  mapStateToProps,
  {
    fetchSessionRequest,
  }
)(AppContainer);
