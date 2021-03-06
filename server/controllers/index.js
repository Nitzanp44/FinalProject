
const therapists=require('../models/therapists');
const Patients=require('../models/patient');
const Practice=require('../models/practice');

module.exports={
    login:(req,res)=>{
        therapists.findOne({Email:req.body.Email})
        .then(user=>{
            if(user)
            {
                if (user.Password===req.body.Password)
                {
                    let clientUser = {ID: "", Name: ""};
                    clientUser.ID = user.ID;
                    clientUser.Name = user.Name;
                    res.json(clientUser);
                }
             else {
                res.status(400).json("no user or password");
            }}
            else {
                res.status(400).json("no user or password");
        }
        })
        .catch(err =>
            res.status(400).json('Error: ' + err)
        );
    },

    patientsList:(req,res)=>{
        Patients.find({IDTherapist:req.body.ID})
        .then(lst=>{
            if(lst.length > 0){
                res.json(lst)
            }else{
                res.json([{Name:"אין מטופלים להצגה", ID:""}])
            }
            })
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
            .catch(err => res.status(400).json('Error: ' + err));
    },

    choosePatient:(req,res)=>{
        Patients.findOne({ID:req.body.ID})
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

    getThrapist:(req,res)=>
    {
        therapists.findOne({ID:req.body.ID})
        .then(therapist=>{
            let therapistRes = {Name: ""};
            therapistRes.Name = therapist.Name;
            res.json(therapistRes)})
        .catch(err=>res.status(400).json('Error: ' + err));
    },

    signUp:(req,res)=>{
        const newThrapist = new therapists(req.body);
        newThrapist.save()
        .than(res.json("ההרשמה בוצעה בהצלחה"))
            .catch(err => res.status(400).json('Error: ' + err));
    },
}

