var landRover = require('../models/landRover');
//for a specific Costume.

exports.landRover_list = async function(req, res) {
    try {
        thelandRover = await landRover.find();
        res.send(thelandRover);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};

// exports.landRover_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: landRover detail: ' + req.params.id);
// };

exports.landRover_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await landRover.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.landRover_create_post = async function(req, res) {
    console.log(req.body)
    let document = new landRover();

    document.model = req.body.model;
    document.price = req.body.price;
    document.color = req.body.color;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        // res.error(500,`{"error": ${err}}`);
        res.status(500)
        res.send(`{"error": Error creating ${err}}`);
    }
};

// exports.landRover_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: landRover delete DELETE ' + req.params.id);
// };
// Handle Costume delete on DELETE.
exports.landRover_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await landRover.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// exports.landRover_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: landRover update PUT' + req.params.id);
// };

exports.landRover_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await landRover.findById(req.params.id)
            // Do updates of properties        
        if (req.body.model)
            toUpdate.model = req.body.model;
        if (req.body.price)
            toUpdate.price = req.body.price;
        if (req.body.color)
            toUpdate.color = req.body.color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
// Handle a show one view with id specified by query
exports.landRover_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await landRover.findById(req.query.id)
        res.render('landRoverDetail', { title: 'landRover Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.landRover_view_all_Page = async function(req, res) {
    try {
        thelandRover = await landRover.find();
        res.render('landRover', { title: 'landRover Search Results', results: thelandRover });
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }

};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.landRover_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('landRovercreate', { title: 'landRover Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a costume.
// query provides the id
exports.landRover_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await landRover.findById(req.query.id)
        res.render('landRoverupdate', { title: 'landRover Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.landRover_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await landRover.findById(req.query.id)
        res.render('landRoverdelete', { title: 'landRover Delete', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};