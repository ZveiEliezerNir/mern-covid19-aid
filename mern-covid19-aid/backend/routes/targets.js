/*
*
*   targets.js
*   mern-covid19-aid project
*   Zvei Eliezer Nir & Refael Knoll
*
*   Defining routes for CRUD operations for the targets collection
*
*/

const router = require('express').Router();
let Target = require('../models/target.model');

// host:port/targets/
router.route('/').get((req, res) => {
  Target.find()
    .then(targets => res.json(targets))
    .catch(err => res.status(400).json('Error: ' + err));
});

// host:port/targets/add
router.route('/add').post((req, res) => {

    // get the needed fields from the request body
    const address = req.body.address;
    const city = req.body.city;
    const date = Date.parse(req.body.date);

    console.log(city);

    // construct a new document
    const newTarget = new Target({
        address,
        city,
        date
    });

    console.log(newTarget);

    // save the new document in the collection
    newTarget.save()
        .then(() => res.json('Target added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET host:port/targets/id
router.route('/:id').get((req, res) => {
    Target.findById(req.params.id)
        .then(targets => res.json(targets))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE host:port/targets/id
router.route('/:id').delete((req, res) => {
    Target.findByIdAndDelete(req.params.id)
        .then(() => res.json('Target deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST host:port/managers/update/id
router.route('/update/:id').post((req, res) => {
    Target.findById(req.params.id)
        .then(target => {
            target.username = req.body.address;
            target.password = Date.parse(req.body.date);
            target.city = req.body.city;

            target.save()
                .then(() => res.json('Target updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;