import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
// import App from './client/App';
import App from './containers/App';
import Html from './html';
// import {ServerStyleSheet} from 'styled-components'; // <-- importing ServerStyleSheet

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  //   const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const body = renderToString(<App />);
  //   const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      body,
      styles: null,
      //   styles, // <-- passing the styles to our Html template
      title,
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
