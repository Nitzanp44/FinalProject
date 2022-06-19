const mongoose = require("mongoose");

const practiceSchema = mongoose.Schema({
        IDPatient:{ type: String, required: true, index: true },
        IDTherapist:{ type: String, required: true, index: true },
        NumOfCycles: { type: Number},
        MuscleLoad: { type: Number},
        Cycle: { type: Array},
        //CycleTime: { type: Array},
        //DataLeft: { type: Array},
        //DataRight: { type: Array},
        created_at: Date,
        updated_at: Date
    }); 



    // on every save, add the date
    practiceSchema.pre('save', function(next) {
        // get the current date
        //this.DataLeft=[];
        //this.DataRight=[];
        let currentDate = new Date();
        this.IsActive=true;
        // change the updated_at field to current date
        this.updated_at = currentDate;
        // if created_at doesn't exist, add to that field
        if (!this.created_at)
            this.created_at = currentDate;
        next();
    });

    module.exports = mongoose.model('practice', practiceSchema);
