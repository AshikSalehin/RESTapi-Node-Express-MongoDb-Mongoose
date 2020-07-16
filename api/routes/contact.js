const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');
const { deleteContact, editContact } = require('../controllers/contact');


router.get('/', contactController.getAllContactController)
router.get('/:name', contactController.getSingleContact)
router.post('/', contactController.postNewContact)


router.put('/:id', contactController.editContact)

router.delete('/:id', contactController.deleteContact)

module.exports = router;