const Html = ({body, title}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;
