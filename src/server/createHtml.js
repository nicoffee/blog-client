export default (html, styles, preloadedState, bundles) => `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="shortcut icon" href="./favicon.ico">
      <link rel="stylesheet" href="./index.css">
      ${styles}
      <title>Blog</title>
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="app-root">${html}</div>
      <div id="modal-root"></div>
      <script src="./manifest.js"></script>
      ${bundles
        .map(bundle => {
          return `<script src="./${bundle.file}"></script>`;
          // alternatively if you are using publicPath option in webpack config
          // you can use the publicPath value from bundle, e.g:
          // return `<script src="${bundle.publicPath}"></script>`
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
