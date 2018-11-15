const express = require('express');
var cors = require('cors');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const Customer_controller = require('../controllers/Customer.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', Customer_controller.test);
router.post('/create',cors(), Customer_controller.Customer_create);
router.get('/:id', cors(),Customer_controller.Customer_details);
router.patch('/:id/update',cors(), Customer_controller.Customer_update);
router.delete('/:id/delete', cors(),Customer_controller.Customer_delete);
//router.get('/all',Student_controller.Student_all);
module.exports = router;