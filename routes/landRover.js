var express = require('express');
var router = express.Router();

const landRover_controller = require('../controllers/landRover');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
        if (req.user) {
            return next();
        }
        req.session.returnTo = req.originalUrl;
        res.redirect("/login");
    }
    /* GET update costu
    /* GET costumes */
router.get('/', landRover_controller.landRover_view_all_Page);
router.get('/detail', landRover_controller.landRover_view_one_Page);
/* GET create costume page */
router.get('/create', landRover_controller.landRover_create_Page);
/* GET create update page */
router.get('/update', landRover_controller.landRover_update_Page);
/* GET create costume page */
router.get('/delete', landRover_controller.landRover_delete_Page);
module.exports = router;