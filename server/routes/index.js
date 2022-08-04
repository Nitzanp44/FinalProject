let express = require('express');
const router = express.Router();

const {
    login,
    addPatient,
    patientsList,
    choosePatient,
    addPractice,
    practiceList,
    getThrapist,
    signUp,
    weightsList
  } = require('../controllers/index.js');
  router.post('/login',login);
  router.post('/addPatient',addPatient);
  router.post('/patientsList',patientsList);
  router.post('/choosePatient',choosePatient);
  router.post('/addPractice',addPractice);
  router.post('/practiceList',practiceList);
  router.post('/getThrapist',getThrapist);
  router.post('/signUp',signUp);
  router.get('/weightsList',weightsList);
  
  module.exports = router;