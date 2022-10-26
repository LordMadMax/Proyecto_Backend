class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    getFullName(){
        return(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre : nombre, autor : autor});
    }
    getBookNames(){
        let bookName = [];
        this.libros.forEach(book => bookName.push(book.nombre));
        return bookName
    }
}

const nuevoUsuario = new Usuario('Maximiiliano', 'Cabrera')
console.warn('Nuevo usuario creado')
console.log(nuevoUsuario)
nuevoUsuario.addMascota('Salem')
nuevoUsuario.addMascota('Olga')
nuevoUsuario.addMascota('Ryuk')
console.warn('Nuevas mascotas agregadas')
console.log(nuevoUsuario)
console.log(`Cantidad de mascotas : ${nuevoUsuario.countMascotas()}`)
nuevoUsuario.addBook('Dantes Inferno', 'Dante Alighieri')
nuevoUsuario.addBook('The Green Mile', 'Stephen King')
nuevoUsuario.addBook('El Codigo Da Vinci', 'Dan Brown')
console.warn('Nuevos Libros Agregados')
console.log(nuevoUsuario)
console.log(`Nombres de Libros agregados : ${nuevoUsuario.getBookNames()}`)