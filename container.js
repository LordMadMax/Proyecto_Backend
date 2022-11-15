const fs = require('fs');

class Container {
    constructor(file){
        this.file = file;
    }

    writeFile = async data => {
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data, null, 2)
            )
        }catch(err) {
            console.log(`error: $(err)`);
        }

    }

    getAll = async() => {
        try {
            const products = await fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(products);
        }catch(err) {
            if(err.message.includes('No existe el archivo o directorio')) return [];
            console.log(`error: $(err)`);
        }
    }

    save = async obj => {
        let products = this.getAll();
        try{
            let newId;
            products.length === 0 ? newId = 1 : newId = products[products.length-1].id + 1;
            let newObj = {...obj, id: newId};
            products.push(newObj);
            await this.writeFile(products);
            return newObj.id;
        }catch(err) {
            console.log(`error: $(err)`);
        }
    }

    getById = async id => {
        let products = await this.getAll();
        try {
            const obj = products.find(id => products.id === id);
            return obj ? obj : null;
        }catch(err) {
            console.log(`error: $(err)`);
        }
    }

    deleteById = async id => {
        let products = await this.getAll();
        try {
            products = products.filter(products => products.id != id);
            await this.writeFile(products);
        }catch(err) {
            console.log(`error: $(err)`);
        }
    }

    deleteAll = async() => {
        this.writeFile([]);
    }
} 

module.exports = Container;