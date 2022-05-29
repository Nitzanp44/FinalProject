let express = require('express');
const router = express.Router();

const {
    login,
    addPatient,
    patientsList
  } = require('../controllers/index.js');
  router.post('/login',login);
  router.post('/addPatient',addPatient);
  router.post('/patientsList',patientsList);

  module.exports = router;