const { Router } = require('express');

const getCharacters = require('../controllers/getCharacters')
const getHello = require('../controllers/getHello')
const router = Router();

module.exports = (app, expressWs) => {
    router.get("/characters", getCharacters);
    router.get("/", getHello)

    // app.ws('/chat', chat);

    app.use('/', router);
};