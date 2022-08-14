
/// Importing some Modules 

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const https = require('https')
const mongoose = require("mongoose");


//Creating our app
const app = express(); 





app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})




// Setting up EJS
app.set('view engine', 'ejs'); 
app.use(express.static("public"));
app.use(express.json({limit:'1mb'}));



//Setting up bodyParser
//Remember to use bodyparser for the passage of the data in ejs
app.use(bodyParser.urlencoded({extended:true})); 


//Connecting with mongoose
mongoose.connect("mongodb+srv://Tanmaydeep:tanmay@cluster1.vcm3w.mongodb.net/API-TEST", {useNewUrlParser:true});

//Creating a schema
const userSchema= {
    book:String,
    quote:String,
};


const Data = new mongoose.model("Data", userSchema); 


app.get("/",(req,res)=>{
    res.send("Server Is Running")
})













// GETTING DATA

app.post("/data",(req,res)=>{

book= req.body.book; //Parsing data from message page
quote= req.body.quote; //Parsing data from message page

    
const newData = new Data({      //Parsing data to Message Schema.
    book: book,
    quote: quote
});


newData.save()

res.redirect('/')



})




// SENDING DATA

app.get("/get-data",(req,res)=>{






        Data.find({}, function(err, newData){
            res.send( newData
            );
        });
        
})











app.listen(8080,
    console.log('Server Up')
) 








