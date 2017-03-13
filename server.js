import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';

const app = express();

//---------------------------------------------------------------------------------

if (process.env.NODE_ENV === 'development') {
    const config = require('./webpack.config.dev');
    const compiler = webpack(config);
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

//GET ARTICLELISTS
app.get('/api/articleList', (req, res) => {

    var indexLimit = parseInt(req.query.indexLimit, 10);
    var articleId = req.query.articleId
    var articleList = [];

    db.collection('articles')
        .find()
        .sort("dateAdded", -1)
        .limit(indexLimit)
        .toArray()
        .then(result => {
            articleList = articleList.concat(result);
        }).then(() => {
            res.send(articleList);
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
