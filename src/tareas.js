import { PRIORIDADES, PROYECTOS } from "./config.js";

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
    if (PRIORIDADES.includes(nuevaPrioridad)) {
      this.prioridad = nuevaPrioridad;
    } else {
      console.log(
        `Prioridad no válida, la prioridad introducida es ${nuevaPrioridad}`
      );
    }
  }

  setProyecto(nuevoProyecto) {
    if (PROYECTOS.includes(nuevoProyecto)) {
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
