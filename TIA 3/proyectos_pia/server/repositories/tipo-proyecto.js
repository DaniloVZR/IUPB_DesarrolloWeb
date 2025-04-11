const db = require('../config/database');
const tipoProyecto = require('../models/Tipo-proyecto');

class proyectoRepository {
  async getAll() {
    const { rows } = await db.query('SELECT * FROM tipo_proyecto');
    return rows.map(row => new tipoProyecto(
        row.id,
        row.codigo,
        row.descripcion,
        row.abreviatura,
        row.fecha_registro
    ));
  }

  async getById(id) {
    const { rows } = await db.query('SELECT * FROM tipo_proyecto WHERE id = $1', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipoProyecto(
        row.id,
        row.codigo,
        row.descripcion,
        row.abreviatura,
        row.fecha_registro
    );
  }

  async create(proyecto) {
    const { rows } = await db.query(
      'INSERT INTO tipo_proyecto (codigo, descripcion, abreviatura, fecha_registro) VALUES ($1, $2, $3, $4) RETURNING *',
      [proyecto.codigo,proyecto.descripcion,proyecto.abreviatura,proyecto.fecha_registro]
    );
    const row = rows[0];
    return new tipoProyecto(
        row.id,
        row.codigo,
        row.descripcion,
        row.abreviatura,
        row.fecha_registro
    );
  }

  async update(id, proyecto) {
    const { rows } = await db.query(
      'UPDATE tipo_proyecto SET codigo = $1, descripcion = $2, abreviatura = $3, fecha_registro = $4 WHERE id = '+id+' RETURNING *',
      [proyecto.codigo,proyecto.descripcion,proyecto.abreviatura,proyecto.fecha_registro]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipoProyecto(
        row.id,
        row.codigo,
        row.descripcion,
        row.abreviatura,
        row.fecha_registro
    );
  }

  async delete(id) {
    const { rowCount } = await db.query('DELETE FROM tipo_proyecto WHERE id = $1', [id]);
    return rowCount > 0;
  }


}

module.exports = new proyectoRepository();