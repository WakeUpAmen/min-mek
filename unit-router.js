'use strict';
const express    = require('express');        
const routerUnit = express.Router();     

const Units     = require('./unit-module');

routerUnit.get('/', (req, res) => {
    res.json({ message: 'welcome to unit api!' });   
});

routerUnit.get('/unit', (req, res) => {
    Units.find((err, units) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({units});
        }
    });
});

routerUnit.post('/unit', (req, res) => {
    var uu = new Units();
    uu.name = req.body.name;
    uu.affi = req.body.affi;
    uu.icon = req.body.icon;
    uu.color = req.body.color;
    uu.save(  err => {
        if (err) {
            res.status(500).json({ error: err });
        }
        res.json({ message: 'Unit create!' });

    });
        
});

routerUnit.put('/unit/:unit_id', (req, res) => {
    Units.findById(req.params.unit_id, (err, unit) => {
        if (err) {
            res.send(err);
        }
        console.log("put")
        console.log(req.body)
        unit.name = req.body.name;  
        unit.affi = req.body.affi;
        unit.icon = req.body.icon;
        unit.color = req.body.color;
        unit.save(err =>  {
            if (err) {
                res.status(500).json({ error: err });
            } 
            res.json({ message: 'Unit updated!' });
        });

    });
});

module.exports = routerUnit;


