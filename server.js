
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


//databse name: contactDb
//collection name: myContacts //fields: name, email, sex, phone
const dbURL = 'mongodb+srv://ashiksalehin1:1245salehin@apicluster.un4wj.mongodb.net/contactDb?retryWrites=true&w=majority';
mongoose.connect(dbURL,{useNewUrlParser: true});


//Checking the connection with the database
const db = mongoose.connection;
db.on('error', (err)=> {
    console.log(err);
})
db.once('open', ()=>{
    console.log("Database Connection Established");
})
//end
/*

//Schema creation for inserting data in mongodb
const Schema = mongoose.Schema;
const demoSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    email:{
        type: String,
        required: true,
        minlength:5
    },
    phone:{
        type:String,
        required:true
    }
});

const Demo = mongoose.model('Demo', demoSchema);
///
*/



const userRoute = require('./api/routes/user')

const contactRoute = require('./api/routes/contact');

const app = express();

//view routes in console
app.use(morgan('dev'));

//cross origin resource shareing frontend and backend different port
app.use(cors());

//veiving json data from client during post route
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/api/contacts', contactRoute);
app.use('/api/users', userRoute)
/*

//send data in database from model
app.get('/demo', (req, res) =>{
    const demo = new Demo({
        name: "Md. Saifuddin Ahmed",
        email: "atik@b.c",
        phone: "01711223344"
    })

    demo.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err => console.log(err))
})
//end


//View Data from Database
app.get('/get', (req, res) =>{
    Demo.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err => console.log(err))
})
//end
*/


app.get('/',(req, res) => {
    res.send("<h1>Hello! This text is sent from a server</h1>");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log('Server is running on port: ${PORT}'+PORT);
});
