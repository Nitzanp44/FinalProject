let express = require('express');
const router = express.Router();
const passport = require("passport");

const {
    login,
    addPatient,
    patientsList,
    choosePatient,
    addPractice,
    practiceList,
    getThrapist,
    signUp,
    weightsList,
    addTherapist,
    therapistList,
    allPatientsList,
    updateUser,
    updatePatient,
    deletePatient,
    deleteUser
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
  router.post('/addTherapist',addTherapist);
  router.post('/therapistList',therapistList);
  router.post('/allPatientsList',allPatientsList);
  router.post('/updateUser',updateUser);
  router.post('/updatePatient',updatePatient);
  router.post('/deleteUser',deleteUser);
  router.post('/deletePatient',deletePatient);
  
  module.exports = router;