class Almacenamiento {
  disponibilidad(tipo) {
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

  static agregar(tipo, clave, valor) {
    if (!disponibilidad(tipo)) return;
    if (typeof valor === "object") {
      //agregar que no se sustituya sino que se agregue a un array
      valor = JSON.stringify(valor);
    }
  }

  static leer(tipo = "localStorage", clave) {
    if (!disponibilidad(tipo)) return;
    let valor = window[tipo].getItem(clave);
    try {
      return JSON.parse(valor);
    } catch (e) {
      return valor;
    }
  }

  static eliminar(tipo = "localStorage", clave) {
    if (!disponibilidad(tipo)) return;
    window[tipo].removeItem(clave);
  }

  static limpiar(tipo = "localStorage") {
    if (!disponibilidad(tipo)) return;
    window[tipo].clear();
  }
}

export default Almacenamiento;
