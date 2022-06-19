
const therapists=require('../models/therapists');
const Patients=require('../models/patient');
const Practice=require('../models/practice');

module.exports={
    login:(req,res)=>{
        console.log("login");
        console.log(req.body);
        therapists.findOne({Email:req.body.Email})
        .then(user=>{
            console.log(user);
            console.log("user123");
            let clientUser = {ID: "", Name: ""};
            clientUser.ID = user.ID;
            clientUser.Name = user.Name;
            // user = Object.assign({}, clientUser);
            console.log(clientUser);
            res.json(clientUser)})
        .catch(err=>res.status(400).json('Error: ' + err));
    },

    patientsList:(req,res)=>{
        console.log("patientsList");
        console.log(req.body);
        Patients.find({IDTherapist:req.body.ID})
        .then(lst=>{    
            console.log(lst);
            
            res.json(lst)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    practiceList:(req,res)=>{
        console.log("practiceList");
        console.log(req.body);
        Practice.find({IDPatient:req.body.ID})
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
    },

    choosePatient:(req,res)=>{
        console.log("choosePatient");
        console.log(req.body);
        Patients.findOne({Name:req.body})
        .then(patient=>{
            let patientRes = {ID: "", Name: ""};
            patientRes.ID = patient.ID;
            patientRes.Name = patient.Name;
            console.log(patientRes);
            res.json(patientRes)})
        .catch(err=>res.status(400).json('Error: ' + err));
    },
    
    addPractice:(req,res)=>{
        
        console.log("addPractice");
        console.log(req.body);
        const newPractice = new Practice(req.body);

        newPractice.save()
            .then((practice) => res.json(practice._id))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    // practiceList:(req,res)=>{
    //     console.log("practiceList");
    //     console.log(req);
    //     Practice.find({IDPatient: statePatient.ID})
    //     .then(lst=>{    
    //         console.log(lst);
    //         res.json(lst)})
    //     .catch(err => res.status(400).json('Error: ' + err));
    // }
}
