import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import Globalstyle from './styles/Globalstyle';

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);