var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var landRover_controller = require('../controllers/landRover');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/landRover', landRover_controller.landRover_create_post);
// DELETE request to delete Costume.
router.delete('/landRover/:id', landRover_controller.landRover_delete);
// PUT request to update Costume.
router.put('/landRover/:id', landRover_controller.landRover_update_put);
// GET request for one Costume.
router.get('/landRover/:id', landRover_controller.landRover_detail);
// GET request for list of all Costume items.
router.get('/landRover', landRover_controller.landRover_view_all_Page);
/* GET create costume page */
router.get('/create', landRover_controller.landRover_create_Page);
module.exports = router;