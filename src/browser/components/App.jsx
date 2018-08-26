import * as React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import routes from '../routes';
import Layout from '../containers/Layout';

const App = ({store}) => (
  <Provider store={store}>
    <Layout>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Layout>
  </Provider>
);

export default App;
