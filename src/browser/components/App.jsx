import * as React from 'react';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import routes from '../routes';
import Layout from '../containers/Layout';

const App = ({store}) => (
  <Provider store={store}>
    <Layout>{renderRoutes(routes)}</Layout>
  </Provider>
);

export default App;
