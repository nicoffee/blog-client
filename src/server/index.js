import express from 'express';
// import cors from 'cors';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../browser/containers/App.jsx';
import {StaticRouter} from 'react-router-dom';
import path from 'path';
import fs from 'fs';

const app = express();

// app.use(cors());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
// app.use(express.static('public'));

app.get('*', (req, res /*next*/) => {
  const context = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  app.use(express.static(path.resolve(__dirname, '/public')));

  // const indexFile = path.resolve(__dirname, 'public', 'index.html');
  fs.readFile('public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace(
        '<div id="app-root"></div>',
        `<div id="app-root">${markup}</div>`
      )
    );
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
