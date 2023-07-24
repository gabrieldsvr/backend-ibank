const express = require('express');
const healthCheck = require('../controllers/HealthCheckController.js');

const healthCheckRoutes = express.Router();

healthCheckRoutes.get('/health', healthCheck.healthCheck);

module.exports = healthCheckRoutes;