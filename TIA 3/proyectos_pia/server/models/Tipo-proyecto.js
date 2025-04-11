class tipoProyecto {
    constructor(id, codigo, descripcion, abreviatura, fecha_registro) {
      this.id = id;
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.abreviatura = abreviatura;
      this.fecha_registro = fecha_registro;
    }
  }
  
  module.exports = tipoProyecto;