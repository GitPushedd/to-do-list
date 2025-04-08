import { PRIORIDADES, PROYECTOS } from "./config.js";
import Almacenamiento from "./almacenamiento.js";

class Validador {
  static validarPrioridad(prioridad) {
    return PRIORIDADES.includes(prioridad);
  }

  static validarProyecto(proyecto) {
    return PROYECTOS.includes(proyecto);
  }
}

class Tarea {
  constructor(
    titulo,
    descripcion,
    fechaVencimiento,
    prioridad = "media",
    proyecto = "por defecto",
    estado = false
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaVencimiento = fechaVencimiento;
    this.prioridad = prioridad;
    this.proyecto = proyecto;
    this.estado = estado;
    this.id = this.generarId();
  }

  generarId() {
    let id;
    do {
      id = Math.floor(Math.random() * 10000);
      if (Almacenamiento.leer("localStorage", "tareas") === null) {
        return id;
      }
    } while (
      Almacenamiento.leer("localStorage", "tareas").some(
        (tarea) => tarea.id === id
      )
    );
    return id;
  }

  setEstado() {
    this.estado ? (this.estado = false) : (this.estado = true);
  }

  setPrioridad(nuevaPrioridad) {
    if (validarPrioridad(nuevaPrioridad)) {
      this.prioridad = nuevaPrioridad;
    } else {
      console.log(
        `Prioridad no válida, la prioridad introducida es ${nuevaPrioridad}`
      );
    }
  }

  setProyecto(nuevoProyecto) {
    if (validarProyecto(nuevoProyecto)) {
      this.proyecto = nuevoProyecto;
    } else {
      console.log(
        `Proyecto no válido, el proyecto introducido es ${nuevoProyecto}`
      );
    }
  }

  setFechaVencimiento(nuevaFecha) {
    this.fechaVencimiento = nuevaFecha;
  }

  setTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  setDescripcion(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
  }
}

class GestorTareas {
  static agregarTarea(
    titulo,
    descripcion,
    fechaVencimiento,
    prioridad = "media",
    proyecto = "por defecto",
    estado = false
  ) {
    Almacenamiento.agregar(
      "localStorage",
      "tareas",
      new Tarea(
        titulo,
        descripcion,
        fechaVencimiento,
        prioridad,
        proyecto,
        estado
      )
    );
  }

  static eliminarTarea(id) {
    Almacenamiento.eliminar("localStorage", "tareas", id);
  }

  static getTareas() {
    return this.tareas;
  }
}

export { Tarea, GestorTareas };
