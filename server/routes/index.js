let express = require('express');
const router = express.Router();

const {
    login,
    addPatient,
    patientsList,
    choosePatient,
    addPractice,
    practiceList
  } = require('../controllers/index.js');
  router.post('/login',login);
  router.post('/addPatient',addPatient);
  router.post('/patientsList',patientsList);
  router.post('/choosePatient',choosePatient);
  router.post('/addPractice',addPractice);
  router.post('/practiceList',practiceList);

  module.exports = router;