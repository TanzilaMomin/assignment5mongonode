const mongoose = require("mongoose");

const wildanimalsModel = mongoose.model("wildanimals",{
    name : {type : String},
    type : {type : String}
});

module.exports = wildanimalsModel ;