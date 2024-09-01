// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, protect, admin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Ejemplo de una ruta protegida
router.get('/admin', protect, admin, (req, res) => {
    res.status(200).json({ message: 'Bienvenido Admin' });
});

module.exports = router;
