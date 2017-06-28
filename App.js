import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import "./default.css";

import Html from "./src/internals/Document/Html";
import { Blog, Homepage, NotFound, Post } from "./src/pages";

const routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/posts/*" component={Post} collection="posts" />
    <Route path="/posts" component={Blog} collection="posts" />
    <Route path="*" component={NotFound} />
  </Router>;

export default createApp(routes, Html);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}

// kill previous website ServiceWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) registration.unregister();
  });
}
