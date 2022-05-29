const therapists=require('../models/therapists');
const Patients=require('../models/patient');

module.exports={
    login:(req,res)=>{
        console.log("login");
        console.log(req.body);
        therapists.findOne({Email:req.body.Email})
        .then(user=>{
            console.log(user);
            res.json(user)})
        .catch(err=>res.status(400).json('Error: ' + err));
    },

    patientsList:(req,res)=>{
        console.log("patientsList");
        //console.log(req.body);
        Patients.find()
        .then(lst=>{
            console.log(lst);
            res.json(lst)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    addPatient:(req,res)=>{
        console.log("addPatient");
        console.log(req.body);
        const newPatient = new Patients(req.body);

        newPatient.save()
            .then((patient) => res.json(patient._id))
            .catch(err => res.status(400).json('Error: ' + err));
    }
}
