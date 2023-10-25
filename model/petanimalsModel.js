const mongoose = require("mongoose");

const petanimalsModel = mongoose.model("petanimals",{
    name : {type : String},
    type : {type : String}
});

module.exports = petanimalsModel ;