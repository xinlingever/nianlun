import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloHandler from './hello.js';

import AddFiles from './addFiles.js';

require('./css/common.less');
let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app" className="homelink">Home  </Link>
        <h1 id='header'>This is a header </h1>
        <Link to="hello" className="hellolink">  Say Hello</Link>
        <RouteHandler/>

        <AddFiles />

      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="hello" path="/hello" handler={HelloHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

