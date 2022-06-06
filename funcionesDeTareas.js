const fs = require("fs");
const {parse} = require("path");

let funcionesDeTareas = {
    archivo: "tareas.json",
    leerJSON: function (){
        let tareasJsonParseado = fs.readFileSync(this.archivo, "utf-8")
        return JSON.parse(tareasJsonParseado); // leerJSON permite obtener la info del archivo JSON (que está en formato JSON) y covertirlo en formato array u objeto literal
    },
    escribirJSON: function (tareas) {let arrayTareasStringify= JSON.stringify(tareas, null, 3);
                  fs.writeFileSync(this.archivo, arrayTareasStringify, "utf-8") //this.archivo es el lugar donde guardo (también podría colocar tareas.json), arrayTareasStringify es lo que guardo
                  //escribirJSON permite guardar el array de tareas actualizado en formato JSON
    },
    guardarTarea: function(tarea){let listaTareas = this.leerJSON();
                                listaTareas.push(tarea);
                                this.escribirJSON(listaTareas); // agrega una tarea dada por parámetro a la lista de tareas y guarda todo en formato JSON
    },
    leerPorEstado: function(estado){ let listaTareas= this.leerJSON();
                                     let tareasFiltradas = listaTareas.filter(tarea => tarea.estado===estado);
                                     return tareasFiltradas;  // leerPorEstado retorna un array de tareas filtradas según estado dado por parámetro
    },

    }



   // ¿Podría ser? leerArchivo: function(){return require("./tareas.json")}} cuando hago un require de un JSON me lo parsea automáticamente y en este caso lo devuelve como un array de objetos literales

module.exports = funcionesDeTareas;