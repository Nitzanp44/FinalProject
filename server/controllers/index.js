
const therapists=require('../models/therapists');
const Patients=require('../models/patient');
const Practice=require('../models/practice');

module.exports={
    login:(req,res)=>{
        therapists.findOne({Email:req.body.Email})
        .then(user=>{
            if(user)
            {
                console.log(user.Password);
                console.log(req.body.Password);
                if (user.Password===req.body.Password)
                {
                    //console.log(user);
                    let clientUser = {ID: "", Name: ""};
                    clientUser.ID = user.ID;
                    clientUser.Name = user.Name;
                    // user = Object.assign({}, clientUser);
                   // console.log(clientUser);
                    res.json(clientUser)
                }}
            else
            {
                console.log("erorr");
                res.status(400).json("no user or password");

            }})
        .catch(err=>res.status(400).json('Error: ' + err));
    },

    patientsList:(req,res)=>{
        Patients.find({IDTherapist:req.body.ID})
        .then(lst=>{    
            res.json(lst)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    practiceList:(req,res)=>{
        Practice.find({IDPatient:req.body.ID})
        .then(lst=>{                
            res.json(lst)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    addPatient:(req,res)=>{
        const newPatient = new Patients(req.body);

        newPatient.save()
            .then((patient) => res.json(patient._id))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    choosePatient:(req,res)=>{
        Patients.findOne({Name:req.body.Name})
        .then(patient=>{
            let patientRes = {ID: "", Name: ""};
            patientRes.ID = patient.ID;
            patientRes.Name = patient.Name;
            res.json(patientRes)})
        .catch(err=>res.status(400).json('Error: ' + err));
    },
    
    addPractice:(req,res)=>{
        
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
