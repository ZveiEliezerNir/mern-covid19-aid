/*
*
*   distributors.js
*   mern-covid19-aid project
*   Zvei Eliezer Nir & Refael Knoll
*
*   Defining routes for CRUD operations for the manager collection
*
*/

const router = require('express').Router();
let Distributor = require('../models/distributor.model');
const Manager = require('../models/manager.model');

// host:port/distributors/add
router.route('/').get((req, res) => {
    Distributor.find()
        .then(distributors => res.json(distributors))
        .catch(err => res.status(400).json('Error: ' + err));
});

// host:port/distributors/add
router.route('/add').post((req, res) => {
    
    // get the needed fields from the request body
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const city = req.body.city;
    //console.log(Manager.findOne({username: req.body.manager}).populate(reportsTo))
    //const reportsTo = Manager.findOne({username: req.body.manager});

    // construct a new document
    const newDistributor = new Distributor({
        username,
        password,
        firstname,
        lastname,
        email,
        phone,
        city
    });


    // save the new documnet in the collection
    newDistributor.save()
        .then(() => res.json('Distributor added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET host:port/distributors/id
router.route('/:id').get((req, res) => {
    Distributor.findById(req.params.id)
        .then(distributors => res.json(distributors))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE host:port/distributors/id
router.route('/:id').delete((req, res) => {
    Distributor.findByIdAndDelete(req.params.id)
        .then(() => res.json('Distributor deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST host:port/distributors/update/id
router.route('/update/:id').post((req, res) => {
    Distributor.findById(req.params.id)
        .then(distributor => {
            distributor.username = req.body.username;
            distributor.password = req.body.password;
            distributor.firstname = req.body.firstname;
            distributor.lastname = req.body.lastname;
            distributor.email = req.body.email;
            distributor.phone = Number(req.body.phone);
            distributor.city = req.body.city;

            distributor.save()
                .then(() => res.json('Distributor updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;