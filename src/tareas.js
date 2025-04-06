import { PRIORIDADES, PROYECTOS } from "./config.js";

class Validador {
  static validarPrioridad(prioridad) {
    return PRIORIDADES.includes(prioridad);
  }

  static validarProyecto(proyecto) {
    return PROYECTOS.includes(proyecto);
  }
}

class Tarea {
  static PRIORIDADES = ["alta", "media", "baja"];

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
  static tareas = [];

  static agregarTarea(
    titulo,
    descripcion,
    fechaVencimiento,
    prioridad = "media",
    proyecto = "por defecto",
    estado = false
  ) {
    this.tareas.push(
      new Tarea(
        titulo,
        descripcion,
        fechaVencimiento,
        prioridad,
        proyecto,
        estado
      )
    );
    console.log(`Tarea ${tarea.titulo} agregada.`);
  }

  static eliminarTarea(titulo) {
    const indice = this.tareas.findIndex((tarea) => tarea.titulo === titulo);
    if (indice !== -1) {
      this.tareas.splice(indice, 1);
      console.log(`Tarea ${titulo} eliminada.`);
    } else {
      console.log(`La tarea ${titulo} no existe.`);
    }
  }

  static getTareas() {
    return this.tareas;
  }
}
