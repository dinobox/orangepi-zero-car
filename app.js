const express = require('express');
const app = express();
const power = require('./power.js');
app.use(express.static('public'));
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/:pin/:value', (req, res) => {
    var pin = req.params.pin;
    var value = req.params.value;
    power.set(pin, value).then((msg) => {
        res.send(msg);
    }).catch((error) => {
        res.send(error);
    });
    // res.json({
    //     pin: pin,
    //     value: value
    // });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));