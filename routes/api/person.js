const express = require('express'),
    router = express.Router(),
    Person = requre('../models/Person');


    router.post('/', async (req, res) => {
        const newPerson = new Person({
            firstName: req.body.firstName,
            lastName: req.body.lastname
        })
        
        try {
            const savePerson = await newPerson.save();

            res.status(201).json({
                message: `Created new user: ${newPerson.firstName} ${newPerson.lastName}`
            })
            
        } catch {
            res.status(401).json({
                message: `Error request not valid`
            })
        }
    })