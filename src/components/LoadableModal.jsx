import * as React from 'react';
import Loadable from 'react-loadable';
import Loader from '../ui/Loader';

export default Loadable({
  loader: () => import('../containers/Modal'),
  loading() {
    return <Loader />;
  },
});
