const express = require('express');
const Container = require('./container');
const app = express();
const PORT = 8080;


const server = app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

server.on('error', err => console.log(`error: $(err)`));

const products = new Container('products.txt');

app.get('/products', async (req, res) => {
    const productos = await products.getAll();
    res.send(productos);
});

app.get('/productRandom', async (req, res) => {
    const productos = await products.getAll();
    let numeroRandom = Math.floor(Math.random() * productos.length);
    res.send(productos[numeroRandom]);
});