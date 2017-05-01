const express = require('express');
const config = require('./config');
const serverRender = require('./serverRender');

const app = express();

app.use(express.static('public'));

import data from './tempData';
app.get('/api/data', (req, res) => {
    res.send(data);
});

app.get('/', async function(req, res) {
    const { initialData, initialContent } =
        await serverRender({ endPoint: '/'});
    res.render('index', { initialData, initialContent });
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on port ${config.port}`);
});
