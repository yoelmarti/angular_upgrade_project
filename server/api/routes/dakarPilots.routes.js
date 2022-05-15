const express = require("express");
const router = express.Router();
const dakarPilotsSchema = require("../models/dakarPilots.model");
const authorize = require("../utils/middlewares/auth.middleware");
const { check, validationResult } = require('express-validator');


// Get All Pilots
router.route('/dakar-pilots').get(authorize, (req, res, next) => {
    dakarPilotsSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

// Get Single Pilot
router.route('/dakar-pilot/:id').get(authorize, (req, res, next) => {
    dakarPilotsSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(data)
        }
    })
})
//Post new Pilot

router.post("/new-pilot",
[
    check('name')
        .not()
        .isEmpty(),
    check('image')
        .not()
        .isEmpty(),
    check('description')
        .not()
        .isEmpty(),
    check('category')
        .not()
        .isEmpty(),
    check('vehicle')
        .not()
        .isEmpty(),
    check('brand')
        .not()
        .isEmpty(),
    check('model')
        .not()
        .isEmpty(),
    check('preparer')
        .not()
        .isEmpty(),
    check('vehicleImg')
        .not()
        .isEmpty(),
],
(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    }
    else {
            const dakarPilot = new dakarPilotsSchema({
                name: req.body.name,
                image: req.body.image,
                description: req.body.description,
                category: req.body.category,
                vehicle: req.body.vehicle,
                brand: req.body.brand,
                model: req.body.model,
                preparer: req.body.preparer,
                vehicleImg: req.body.vehicleImg,
            });
            dakarPilot.save().then((response) => {
                res.status(201).json({
                    message: "Pilot successfully created!",
                    result: response
                });
            }).catch(error => {
                res.status(500).json({
                    error: error
                });
            });
    }
})



module.exports = router;