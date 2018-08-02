import * as React from 'react';

const withLogging = WrappedComponent =>
  class MountLogger extends React.Component {
    componentDidMount() {
      console.log('Did mount');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withLogging;
