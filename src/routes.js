import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import ArticleList from "./components/pages/ArticleList.jsx";
import Article from "./components/pages/Article.jsx";

export default(
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/articleList" name="ArticleList" component={ArticleList}></Route>
        <Route path="/article/:id" name="Article" component={Article}></Route>
    </Route>
);
