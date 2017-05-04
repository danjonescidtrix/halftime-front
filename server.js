import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';
var DashboardPlugin = require('webpack-dashboard/plugin');


const app = express();

//---------------------------------------------------------------------------------

if (process.env.NODE_ENV === 'development') {
    const config = require('./webpack.config.dev');
    const compiler = webpack(config);
    compiler.apply(new DashboardPlugin());
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
    app.use(express.static(path.resolve(__dirname, 'src')));
} else if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
}

//---------------------------------------------------------------------------------

//GET ARTICLES
app.get('/api/articleList', (req, res) => {

    var indexLimit = parseInt(req.query.indexLimit, 10);
    var articleId = req.query.articleId
    var articles = [];

    db.collection('articles')
        .find()
        .sort("dateAdded", -1)
        .limit(indexLimit)
        .toArray()
        .then(result => {
            articles = articles.concat(result);
        }).then(() => {
            res.send(articles);
        }).catch(e => {
            console.error(e);
        });
});

//GET ARTICLE
app.get('/api/article', (req, res) => {

    var ObjectId = require('mongodb').ObjectID;
    var articleId = req.query.id
    var articles;

    db.collection('articles')
        .findOne({
            "_id": ObjectId(articleId)
        })
        .then(result => {
            articles = result;
        }).then(() => {
            res.send(articles);
        }).catch(e => {
            console.error(e);
        });

});

//------------------------------------

app.get('*', middleware);


//connect to mongo db
var db
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://dannyjones360:test@ds123930.mlab.com:23930/halftimefront', (err, database) => {
    if (err) return console.log(err);
    db = database
    console.log('db connected');
    app.listen(3000, '0.0.0.0', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.info('Listening at http://localhost:3000');
        }
    });
})
