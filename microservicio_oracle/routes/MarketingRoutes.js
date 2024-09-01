// routes/MarketingRoutes.js
const express = require('express');
const router = express.Router();
const MarketingController = require('../controllers/MarketingController');

router.get('/marketing', MarketingController.getAllMarketing);
router.get('/marketing/:id', MarketingController.getMarketingById);
router.post('/marketing', MarketingController.createMarketing);
router.put('/marketing/:id', MarketingController.updateMarketing);
router.delete('/marketing/:id', MarketingController.deleteMarketing);

module.exports = router;
