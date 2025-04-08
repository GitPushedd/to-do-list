class Almacenamiento {
  static disponibilidad(tipo) {
    let almacenamiento;
    try {
      almacenamiento = window[tipo];
      const testKey = "__test__";
      almacenamiento.setItem(testKey, "test");
      almacenamiento.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  static agregar(tipo = "localStorage", clave, valor) {
    if (!this.disponibilidad(tipo)) return;

    const almacenamiento = window[tipo];
    let item;

    try {
      item = JSON.parse(almacenamiento.getItem(clave));
    } catch (e) {
      item = [];
    }

    if (!Array.isArray(item)) {
      item = [];
    }

    item.push(valor);
    almacenamiento.setItem(clave, JSON.stringify(item));
  }

  static leer(tipo = "localStorage", clave) {
    if (!this.disponibilidad(tipo)) return;
    let valor = window[tipo].getItem(clave);
    try {
      return JSON.parse(valor);
    } catch (e) {
      return valor;
    }
  }

  static eliminar(tipo = "localStorage", clave, id) {
    if (!this.disponibilidad(tipo)) return;
    const almacenamiento = window[tipo];
    let item;

    try {
      item = JSON.parse(almacenamiento.getItem(clave));
    } catch (e) {
      item = [];
    }

    if (!Array.isArray(item)) {
      item = [];
    }

    let posicion = item.findIndex((index) => index.id == id);

    if (posicion == -1) {
      console.log("No se encontró el ID " + id);
      return;
    }
    item.splice(posicion, 1);
    almacenamiento.setItem(clave, JSON.stringify(item));
  }

  static limpiar(tipo = "localStorage") {
    if (!this.disponibilidad(tipo)) return;
    window[tipo].clear();
  }
}

export default Almacenamiento;
