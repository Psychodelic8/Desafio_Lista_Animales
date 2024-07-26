class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  get nombre() {
    return this._nombre;
  }

  get direccion() {
    return this._direccion;
  }

  get telefono() {
    return this._telefono;
  }
  datosPropietario() {
    return `El propietario es: ${this._nombre}, su domicilio es: ${this._direccion}, y el número telefónico de contacto es: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
  datosAnimal() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevoEnfermedad) {
    this._enfermedad = nuevoEnfermedad;
  }
  datosMascota() {
    return `el nombre de la mascota es: ${this._nombreMascota} y su enfermedad es: ${this._enfermedad}`;
  }
}
let agregar = document.getElementById("add");
agregar.addEventListener("click", (event) => {
  event.preventDefault();
  let nombre = document.getElementById("propietario").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let tipo = document.getElementById("tipo").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let enfermedad = document.getElementById("enfermedad").value;
  let propietario = new Propietario(nombre, direccion, telefono);
  let animal = new Animal(nombre, direccion, telefono, tipo);
  let mascota = new Mascota(
    nombre,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  );

  document.getElementById("propietario").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("nombreMascota").value = "";
  document.getElementById("enfermedad").value = "";
  document.getElementById("propietario").focus();
  document.getElementById("resultado").innerHTML += `
      <ul>
        <li>${propietario.datosPropietario()}</li>
        <li>${animal.datosAnimal()}, mientras que ${mascota.datosMascota()}</li>
        </ul>
      `;
});
