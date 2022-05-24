const mongoose = require("mongoose");

const therapistsSchema = mongoose.Schema({
        ID:{ type: String, required: true, unique: true, index: true },
        Name: { type: String, required: true},
        Email:{ type: String, required: true },
        Phone: { type: String, required: true },
        Password: { type: String, required: true },
        patients: {type:Array},
        created_at: Date,
        updated_at: Date
    }); 

    // on every save, add the date
    therapistsSchema.pre('save', function(next) {
        // get the current date
        let currentDate = new Date();
        this.IsActive=true;
        // change the updated_at field to current date
        this.updated_at = currentDate;
        // if created_at doesn't exist, add to that field
        if (!this.created_at)
            this.created_at = currentDate;
        next();
    });

    module.exports = mongoose.model('therapists', therapistsSchema);