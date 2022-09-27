class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  getFullName() {
    return console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`);
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
    return console.log(`${this.mascotas}`);
  }
  countMascotas() {
    const count = this.mascotas.length;
    return console.log(count);
  }
  addBook(nombre, autor) {
    const libro={'nombre':nombre , 'autor':autor}
    this.libros.push(libro)
    return console.log(libro)
  }
  getBookNames() {
    const nombreLibros = this.libros.map((e) => e.nombre);
    return console.log(nombreLibros);
  }
}

const usuario = new Usuario("Ricardo", "Gil");
usuario.getFullName();
usuario.addMascota("gato");
usuario.countMascotas();
usuario.addBook("la vida es bella","Salamanca" )
usuario.getBookNames()
