const express = require("express");
const mongoose = require("mongoose");
const petanimalsModel = require("./model/petanimalsModel");
const wildanimalsModel = require("./model/wildanimalsModel");

mongoose.connect("mongodb://127.0.0.1:27017/animalsdb")
.then(()=>{
    console.log("Mongo DB is connected Successfully!!")
})

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Pet and Wild Animals....");
});

app.post("/petanimals", async (req, res)=>{
    const filt = req.body;
    const result = await petanimalsModel.find(filt);
    res.json(result);
});

app.post("/wildanimals",async  (req, res)=>{
    const filt = req.body;
    const result = await wildanimalsModel.find(filt);
    res.json(result);
});

app.listen(5030, ()=>{
    console.log("Service is running on 5030 Port...");
});