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
    weightsList,
    addTherapist,
    addWeight,
    therapistList,
    allPatientsList,
    updateUser,
    updatePatient,
    deletePatient,
    deleteUser
  } = require('../controllers/index.js');
  router.post('/login', login);
  router.post('/addPatient',addPatient);
  router.post('/patientsList',patientsList);
  router.post('/choosePatient',choosePatient);
  router.post('/addPractice',addPractice);
  router.post('/practiceList',practiceList);
  router.post('/getThrapist',getThrapist);
  router.get('/weightsList',weightsList);
  router.post('/addTherapist',addTherapist);
  router.post('/addWeight',addWeight);
  router.get('/therapistList',therapistList);
  router.get('/allPatientsList',allPatientsList);
  router.post('/updateUser',updateUser);
  router.post('/updatePatient',updatePatient);
  router.post('/deleteUser',deleteUser);
  router.post('/deletePatient',deletePatient);
  
  module.exports = router;


  // router.post('/login', passport.authenticate("local", login);
//   router.post(
  //     '/login',
  //     function(req, res) {
    //        console.log('passport.authenticate ---> ',req);
    //     }
    //  );