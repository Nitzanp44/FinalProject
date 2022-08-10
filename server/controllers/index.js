
const users=require('../models/user');
const Patients=require('../models/patient');
const Practice=require('../models/practice');
const weights=require('../models/weights');

module.exports={
    login:(req,res)=>{
        users.findOne({Email:req.body.Email})
        .then(user=>{
            if(user)
            {
                if (user.Password===req.body.Password)
                {
                    let clientUser = {ID: "", Name: "", Type:""};
                    clientUser.ID = user.ID;
                    clientUser.Name = user.Name;
                    clientUser.Type = user.Type;
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

    therapistList:(req,res)=>{
        users.find({Type: "therapist"})
        .then(lst=>{                
            res.json(lst)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    allPatientsList:(req,res)=>{
        Patients.find()
        .then(lst=>{  
           // console.log(lst);              
            res.json(lst)})
        //.catch(err => res.status(400).json('Error: ' + err));
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

    getThrapist:(req,res)=> {
        users.findOne({ID:req.body.ID})
        .then(therapist=>{
            let therapistRes = {Name: ""};
            therapistRes.Name = therapist.Name;
            res.json(therapistRes)})
        .catch(err=>res.status(400).json('Error: ' + err));
    },

    addTherapist:(req,res)=>{
        const newThrapist = new users(req.body);
        newThrapist.save()
        .than((p)=>res.json("ההרשמה בוצעה בהצלחה"))
            .catch(err => res.status(400).json('Error: ' + err));
    },
    
    addWeight:(req,res)=>{
        const newWeight = new weights(req.body);
        newWeight.save()
        .than((p)=>res.json("ההרשמה בוצעה בהצלחה"))
            .catch(err => res.status(400).json('Error: ' + err));
    },
    
    weightsList:(req,res)=>{
        weights.find()
        .then(lst=>{
            if(lst){
                res.json(lst);
    }})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    updateUser:(req,res)=>{
        users.updateOne(req.body[0], {$set: req.body[1]}, (error, deleteRecord) =>{
            if(!error){
                res.json(deleteRecord);
            }
        }
            );
    },

    updatePatient:(req,res)=>{
        Patients.updateOne(req.body[0], {$set: req.body[1]}, (error, deleteRecord) =>{
            if(!error){
                res.json(deleteRecord);
            }
        }
            );
    },

    deleteUser:(req,res)=>{
        users.findOneAndRemove({Email: req.body.Email}, (error, deleteRecord) =>{
            if(!error){
                res.json(deleteRecord);
            }
        })
    },

    deletePatient:(req,res)=>{
        Patients.findOneAndRemove({Email: req.body.Email}, (error, deleteRecord) =>{
            if(!error){
                res.json(deleteRecord);
            }
        })
    },
}

