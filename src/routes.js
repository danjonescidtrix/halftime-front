import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import Articles from "./components/pages/Articles.jsx";
import Article from "./components/pages/Article.jsx";

export default(
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/articles" name="Articles" component={Articles}></Route>
        <Route path="/articles/:id" name="Article" component={Article}></Route>
    </Route>
);
