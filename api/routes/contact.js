const express = require('express');
const router = express.Router();
const authenicate = require('../middleware/authenticate')

const contactController = require('../controllers/contact');
const { deleteContact, editContact } = require('../controllers/contact');


router.get('/', authenicate,contactController.getAllContactController)
router.get('/:name', contactController.getSingleContact)
router.post('/', authenicate, contactController.postNewContact)


router.put('/:id', authenicate,contactController.editContact)

router.delete('/:id', authenicate,contactController.deleteContact)

module.exports = router;