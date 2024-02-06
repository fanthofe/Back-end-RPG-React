const express = require('express');
const characterController = require('../controllers/character.controller');
const controllerWrapper = require('../helpers/controller.wrapper');
const mainController = require('../controllers/main.controller');

const router = express.Router();

router.get(
    '/characters',
    controllerWrapper(characterController.getAllChar)
);

router.get(
    '/characters/:id(\\d+)',
    controllerWrapper(characterController.getOneChar)
);

router.use(mainController.notFound);

module.exports = router;