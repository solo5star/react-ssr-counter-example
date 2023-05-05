import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf-8");

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(<App />);
  console.log(renderString);
  res.send(html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`));
});
app.use("/", express.static("dist/client"));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
