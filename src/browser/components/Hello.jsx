import * as React from 'react';
import {Link} from 'react-router-dom';

const Hello = () => (
  <div>
    <h1>Hello</h1>
    <Link to="/bye">To bye</Link>
  </div>
);

export default Hello;
