const listaDeContactos = [];

function crearContacto(nombre, telefono) {
    const nuevoContacto = {
        nombre: nombre,
        telefono: telefono
    };
    listaDeContactos.push(nuevoContacto);
    console.log(`Contacto "${nombre}" agregado.`);
}

function eliminarContacto(nombre) {
    const indice = listaDeContactos.findIndex(contacto => contacto.nombre === nombre);
    if (indice !== -1) {
        listaDeContactos.splice(indice, 1);
        console.log(`Contacto "${nombre}" eliminado.`);
    } else {
        console.log(`No se encontró un contacto con el nombre "${nombre}".`);
    }
}

function imprimirContactos() {
    console.log("Lista de Contactos:");
    listaDeContactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
}

crearContacto("Juan Perez", "123-456-7890");
crearContacto("Maria Gomez", "987-654-3210");
eliminarContacto("Maria Gomez");
crearContacto("Carlos Sanchez", "555-555-5555");
imprimirContactos();
