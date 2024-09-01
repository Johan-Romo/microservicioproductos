// controllers/MarketingController.js
const Marketing = require('../models/Marketing');

exports.getAllMarketing = async (req, res) => {
  try {
    const marketing = await Marketing.getAllMarketing();
    res.status(200).json(marketing);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener marketing' });
  }
};

exports.getMarketingById = async (req, res) => {
  try {
    const marketing = await Marketing.getMarketingById(req.params.id);
    if (!marketing) {
      return res.status(404).json({ error: 'Campaña de marketing no encontrada' });
    }
    res.status(200).json(marketing);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la campaña de marketing' });
  }
};

exports.createMarketing = async (req, res) => {
  try {
    const result = await Marketing.createMarketing(req.body);
    res.status(201).json({ message: 'Campaña de marketing creada', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la campaña de marketing' });
  }
};

exports.updateMarketing = async (req, res) => {
  try {
    const result = await Marketing.updateMarketing(req.params.id, req.body);
    res.status(200).json({ message: 'Campaña de marketing actualizada', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la campaña de marketing' });
  }
};

exports.deleteMarketing = async (req, res) => {
  try {
    const result = await Marketing.deleteMarketing(req.params.id);
    res.status(200).json({ message: 'Campaña de marketing eliminada', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la campaña de marketing' });
  }
};
