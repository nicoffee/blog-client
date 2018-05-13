const express = require('express');
const path = require('path');
// import React from 'react';
// import {renderToString} from 'react-dom/server';
// import App from './src/components/App';
// import Html from './src/html';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.get('/', (req, res) => {
//   /**
//    * renderToString() will take our React app and turn it into a string
//    * to be inserted into our Html template function.
//    */
//   const body = renderToString(<App />);
//   const title = 'Server side Rendering with Styled Components';

//   res.send(
//     Html({
//       body,
//       title,
//     })
//   );
// });

app.listen(port);
