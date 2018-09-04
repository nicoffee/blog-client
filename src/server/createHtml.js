export default (html, styles, preloadedState, bundles) => `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="shortcut icon" href="./favicon.ico">
      <link rel="stylesheet" type="text/css" href="./index.css">
      ${styles}
      <title>Blog</title>
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="app-root">${html}</div>
      <div id="modal-root"></div>
      ${bundles
        .map(bundle => {
          return `<script src="./${bundle.file}"></script>`;
        })
        .join('\n')}
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="./bundle.js"></script>
      <script></script>
    </body>
  </html>
`;
