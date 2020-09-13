/*
*
*   managers.js
*   mern-covid19-aid project
*   Zvei Eliezer Nir & Refael Knoll
*
*   Defining routes for CRUD operations for the manager collection
*
*/

const router = require('express').Router();
let Manager = require('../models/manager.model');

// localhost:port/managers/
router.route('/').get((req, res) => {
    Manager.find()
    .then(managers => res.json(managers))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

// localhost:port/managers/add
router.route('/add').post((req, res) => {
    
    // get the needed fields from the request body
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const city = req.body.city;

    // construct a new document
    const newManager = new Manager({
        username,
        password,
        firstname,
        lastname,
        email,
        phone,
        city
    });

    // save the new documnet in the collection
    newManager.save()
        .then(() => res.json('Manager added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET host:port/managers/id
router.route('/:id').get((req, res) => {
    Manager.findById(req.params.id)
        .then(managers => res.json(managers))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE host:port/managers/id
router.route('/:id').delete((req, res) => {
    Manager.findByIdAndDelete(req.params.id)
        .then(() => res.json('Manager deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST host:port/managers/update/id
router.route('/update/:id').post((req, res) => {
    Manager.findById(req.params.id)
        .then(manager => {
            manager.username = req.body.username;
            manager.password = req.body.password;
            manager.firstname = req.body.firstname;
            manager.lastname = req.body.lastname;
            manager.email = req.body.email;
            manager.phone = Number(req.body.phone);
            manager.city = req.body.city;

            manager.save()
                .then(() => res.json('Manager updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;