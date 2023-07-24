const express = require('express');
const factorysController = require('../controllers/FactoryController.js');
const factorysRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: factorys
 *   description: Endpoints para manipulação de factorys
 */

factorysRoutes.get('/factoryMusic', factorysController.createFakeMusics);
factorysRoutes.get('/factoryAudio/:id', factorysController.createFakeAudios);
factorysRoutes.get('/factoryDocument/:id', factorysController.createFakeDocuments);

module.exports = factorysRoutes;