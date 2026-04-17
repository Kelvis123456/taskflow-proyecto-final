function crearTarea(titulo) {
  if (!titulo) {
    return "Error: titulo vacio";
  }
  return { titulo: titulo, completada: false };
}

function completarTarea(tarea) {
  if (!tarea) {
    return "Error: tarea no existe";
  }
  tarea.completada = true;
  return tarea;
}

function eliminarTarea(tarea) {
  if (!tarea) {
    return "Error: tarea no existe";
  }
  return "Tarea eliminada";
}

function filtrarTareas(tareas, estado) {
  if (estado === "completadas") {
    return tareas.filter(t => t.completada === true);
  }
  if (estado === "pendientes") {
    return tareas.filter(t => t.completada === false);
  }
  return tareas;
}


// pruebas

console.log("Prueba crear tarea:");
console.log(crearTarea("Estudiar"));

console.log("Prueba crear tarea vacia:");
console.log(crearTarea(""));

let tarea1 = crearTarea("Proyecto final");

console.log("Prueba completar tarea:");
console.log(completarTarea(tarea1));

console.log("Prueba eliminar tarea:");
console.log(eliminarTarea(tarea1));

let lista = [
  crearTarea("Tarea 1"),
  crearTarea("Tarea 2")
];

lista[0].completada = true;

console.log("Prueba filtrar completadas:");
console.log(filtrarTareas(lista, "completadas"));

console.log("Prueba filtrar pendientes:");
console.log(filtrarTareas(lista, "pendientes"));
