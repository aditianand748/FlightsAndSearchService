const express = require('express');
const CityController = require('../../controller/city-controller');
const router = express.Router();
router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.get('/city', CityController.getAll);
router.delete('/city/:id',CityController.delete);
router.patch('/city',CityController.update);

module.exports = router;