
function Cliente(nombre, email, clave, direccion, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.direccion = direccion;
    this.telefono = telefono;
}

Cliente.prototype.realizarpedido = function() {
    return 'Hola, soy &{this.nombre}, este es mi correo ${this.email} y mi clave es ${this.clave} y mi direccion es ${this.direccion] y mi numero de telefono es ${this.telefono}';
}

function Repartidor(nombre, email, clave, vehiculo, disponibilidad) {
    Cliente.call(this, nombre, apellido);
    this.clave = clave;
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
}

Repartidor.prototype = Object.create(Cliente.prototype);
Repartidor.prototype.constructor = Repartidor;

Repartidor.prototype.pedido = function () {
    console.log("Este es el pedido que ordene. ");
};

Repartidor.prototype.repartidor = function () {
    return '${Cliente.prototype.repartidor.call(this)} Y este es mi repartidor.';
};