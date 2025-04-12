const express = require('express');
const router = express.Router();
const proyectosRepository = require('../repositories/tipo-proyecto');

// GET todos los proyectos
router.get('/', async (req, res) => {
  try {
    const proyectos = await proyectosRepository.getAll();
    res.status(200).json(proyectos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los tipos de proyectos', error: error.message });
  }
});

// POST crear nuevo Proyecto
router.post('/', async (req, res) => {
  try {
    const nuevoProyecto = await proyectosRepository.create(req.body);
    res.status(200).json({ 
      message: 'Tipo de proyecto creado exitosamente',
      proyecto: nuevoProyecto
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear el tipo proyecto', error: error.message });
  }
});

// PUT actualizar proyecto
router.put('/:id', async (req, res) => {
  try {
    const proyectoActualizado = await proyectosRepository.update(req.params.id, req.body);
    if (proyectoActualizado) {
      res.status(200).json({ 
        message: 'Tipo de proyecto actualizado exitosamente',
        proyecto: proyectoActualizado
      });
    } else {
      res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al actualizar el tipo proyecto', error: error.message });
  }
});

// DELETE eliminar Proyecto
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await proyectosRepository.delete(req.params.id);
    if (eliminado) {
      res.status(200).json({ message: 'Tipo proyecto eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Tipo proyecto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el tipo de proyecto', error: error.message });
  }
});

module.exports = router;