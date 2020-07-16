const Contact = require('../models/Contact');

const getAllContactController = (req, res, next) =>{
    Contact.find()
        .then(Contact => {
            res.json(Contact);
        })
        .catch( err => console.log(err));
    }

const postNewContact = (req, res, next) =>{
    
    const contact =new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone    
    });
    contact.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err))
    }

const getSingleContact = (req, res, next) =>{
    let name = req.params.name;
    console.log(name)
    Contact.findOne({"name": name})
    .then(data => {
        res.json(data);
    })
    .catch(err => console.log(err))
}

const deleteContact = (req, res, next) =>{
    let id = req.params.id;
    console.log(id);
    Contact.findByIdAndRemove(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err))
}

const editContact = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }
    Contact.findByIdAndUpdate(id, {$set: updatedContact})
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err))

}

 module.exports = {
     getAllContactController,
     postNewContact,
     getSingleContact,
     deleteContact,
     editContact
 }
