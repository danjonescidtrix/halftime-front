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

//connect to mongo db
var db
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://dannyjones360:test@ds123930.mlab.com:23930/halftimefront', (err, database) => {
    if (err) return console.log(err);
    db = database
    console.log('db connected');
})

// app.get('/dog', function(req, res) {
//    res.json({ querystring_breed: req.query.breed });
// });
//
//
// http://localhost:8080/dog?breed='Whippet'


// http://localhost:8080/dog?breed='Whippet&age=10'
// And, you obtain it by simply adding another property in the response json object.
//
// app.get('/dog', function(req, res) {
//    res.json({ querystring_breed: req.query.breed,
//           age: req.query.age });
// });


app.get('/api/articles', (req, res) => {

    var indexLimit = req.query.indexLimit;
    console.log(indexLimit);
    var articles = [];
    //console.log(articles);

    db.collection('articles').find().toArray().then(result => {
        articles = articles.concat(result);
    }).then(() => {

        res.send(articles);
    }).catch(e => {
        console.error(e);
    });
});

app.get('*', middleware);


app.listen(3000, '0.0.0.0', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info('Listening at http://localhost:3000');
    }
});
