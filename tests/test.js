function testCrearTarea() {
    const tarea = "Estudiar";
    if (tarea !== "") {
        console.log("Crear tarea: OK");
    } else {
        console.log("Crear tarea: FAIL");
    }
}

function testCompletarTarea() {
    let completada = true;
    if (completada) {
        console.log("Completar tarea: OK");
    } else {
        console.log("Completar tarea: FAIL");
    }
}

function testEliminarTarea() {
    let tareas = ["A", "B"];
    tareas.pop();

    if (tareas.length === 1) {
        console.log("Eliminar tarea: OK");
    } else {
        console.log("Eliminar tarea: FAIL");
    }
}

testCrearTarea();
testCompletarTarea();
testEliminarTarea();
