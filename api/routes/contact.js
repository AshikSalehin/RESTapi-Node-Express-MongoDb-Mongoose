const express = require('express');
const router = express.Router();

const contacts = [];

router.get('/', (req, res, next) =>{
    console.log(req.url);
    //const id = req.params.id;
    
    res.status(200).json({ 
        contacts
    });
})
router.post('/', (req, res, next) =>{
    const name= req.body.name;
    const email= req.body.email;
    contacts.push({
        name,
        email
    })


    res.status(200).json({ 
        message: "Data Saved",
        name: name,
        email: email
    });
})
router.put('/:id', (req, res, next) =>{
    console.log(req.url);
    const id = req.params.id;
    res.json({
        message: "Im a PUT route" 
    });
})

router.delete('/:id', (req, res, next) =>{
    console.log(req.url);
    const id = req.params.id;
    res.json({
        message: "Im a Delete route" 
    });
})

module.exports = router;