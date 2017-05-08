import React from 'react';
import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router';
import reducers from './reducers';
import routes from './routes';
import store from './store';
import Helmet from 'react-helmet';
let head = Helmet.rewind();

export default(req, res) => {
  match({
    routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      if (process.env.NODE_ENV == 'development') {
        res.status(200).send(`
          <!doctype html>
          <html>
            <head>
              <meta charset="UTF-8">
                <title>${head.title}</title>
            </head>
            <body>
              <div id='app'></div>
              <script src='/bundle.js'></script>
            </body>
          </html>
				`);
      } else if (process.env.NODE_ENV == 'production') {
        res.status(200).send(`
					<!doctype html>
					<html>
						<head>
							<title>My Universal App</title>
							<link rel='stylesheet' href='bundle.css'>
						</head>
						<body>
							<div id='app'>${renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )}</div>
              <script src='/bundle.js'></script>
						</body>
					</html>
				`);
      }
    } else {
      res.status(404).send('Not found');
    }
  });
};
