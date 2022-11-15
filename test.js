const Container = require('./main.js');

const products = new Container('products.txt');

const test = async () => {
    let save = await products.save({
        title: 'calzoncillo',
        price: 2244,
        thumbnail: 'https:alala1321',
    });

let getAll = await products.getAll();
let getById = await products.getById(1);
let deleteById = await products.deleteById(2);
let deleteAll =  await products.deleteAll();
console.log(save);
console.log(getAll);
console.log(getById);
console.log(deleteById);
console.log(deleteAll);
};

test();