import { PROYECTOS } from "./config";

class Proyecto {
  static agregarProyecto(proyecto) {
    if (!PROYECTOS.includes(proyecto)) {
      PROYECTOS.push(proyecto);
      console.log(`Proyecto ${proyecto} agregado.`);
    } else {
      console.log(`El proyecto ${proyecto} ya existe.`);
    }
  }

  static eliminarProyecto(proyecto) {
    if (PROYECTOS.includes(proyecto)) {
      const indice = PROYECTOS.indexOf(proyecto);
      PROYECTOS.splice(indice, 1);
      console.log(`Proyecto ${proyecto} eliminado.`);
    } else {
      console.log(`El proyecto ${proyecto} no existe.`);
    }
  }

  static getProyectos() {
    return PROYECTOS;
  }
}
