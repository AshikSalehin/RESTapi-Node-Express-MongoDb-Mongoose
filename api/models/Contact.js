const mongoose = require('mongoose');
const validateor = require('validator');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name:{
        type:String,
        trim:trye,
        required:true,
        minlength:3
    },
    email:{
        type: String,
        trim:true,
        required:false,
        validate:(v)=>{
            return validator.isEmail(v);
        },
        message: V+"is not an email"
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }

});

const Contact = mongoose.model('Contact',ContactSchema);
module.exports = Contact;