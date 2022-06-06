const process = require ("process");
const funcionesDeTareas = require("./funcionesDeTareas.js")

const accion = process.argv[2];


switch (accion) {
    case "listar":  let listaDeTareas = funcionesDeTareas.leerJSON();
                    listaDeTareas.forEach(tarea => console.log(tarea.titulo + " --> " + tarea.estado));
        break;

    case "crear":   let tituloPorConsola = process.argv[3];
                    let tarea = {titulo: tituloPorConsola, 
                                 estado: "Pendiente"}
                    funcionesDeTareas.guardarTarea(tarea);
        break;

    case "filtrar": let estado = process.argv[3];
                    let estadosFiltrados = funcionesDeTareas.leerPorEstado(estado);
                    estadosFiltrados.forEach(estadoFiltrado => console.log(estadoFiltrado.titulo + " --> " + estadoFiltrado.estado))
        break;
    
    case undefined: console.log("Atención - Tienes que pasar una acción.")
        break;

    default: console.log("No entiendo qué quieres hacer.")
        break;
} 

