const express = require('express');
const config = require('./config');
const serverRender = require('./serverRender');

const app = express();

app.use(express.static('public'));

import data from './tempData';
app.get('/api/data', (req, res) => {
    res.send(data);
});

app.get('/', function(req, res) {
    res.render('index', {
        initialContent: serverRender({ endPoint: '/'})
    });
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on port ${config.port}`);
});
