class Utilidades {
  static generarId() {
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
}
