// const express = require('express');
// const { register, login } = require('../controllers/authController');
// const authenticateToken = require('../middlewares/authMiddlewares')

import express from 'express'
import {register, login} from '../controllers/authController'
import authenticateToken from '../middlewares/authMiddlewares';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({message: 'Acesso permitido!' , user: req.user });
});

export default router