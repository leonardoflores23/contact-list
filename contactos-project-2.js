
const contactos = [];

function crearContacto(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
    const nuevoContacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: ubicaciones,
        ciudad: ciudad,
        direccion: direccion
    };
    contactos.push(nuevoContacto);
}

function eliminarContacto(id) {
    const indice = contactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
        contactos.splice(indice, 1);
        console.log(`Contacto con ID ${id} eliminado.`);
    } else {
        console.log(`No se encontró un contacto con el ID ${id}.`);
    }
}

function actualizarContacto(id, nuevosDatos) {
    const contacto = contactos.find(contacto => contacto.id === id);
    if (contacto) {
        Object.assign(contacto, nuevosDatos);
        console.log(`Contacto con ID ${id} actualizado.`);
    } else {
        console.log(`No se encontró un contacto con el ID ${id}.`);
    }
}

crearContacto(1, "Leonardo", "Flores", "123-456-7890", ["Oficina 123"], "Tegucigalpa", "Calle 9");
crearContacto(2, "Pablo", "Ramirez", "987-654-4568", ["Casa 900"], "Medellin", "Calle 20");
crearContacto(3, "Pancho", "Ventura", "987-654-9999", ["Casa 456"], "San Pedro", "Calle 12");
crearContacto(4, "Maria", "Gomez", "987-654-5970", ["Casa 12"], "San Luis", "Calle 13");

console.log(contactos);

eliminarContacto(10)
console.log(contactos);

actualizarContacto(2, { telefono: "555-555-5555", direccion: "Calle Z" });
console.log(contactos);
