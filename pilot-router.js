'use strict';
const express    = require('express');        
const routerPilot = express.Router();     

const Pilots     = require('./pilot-module');

routerPilot.get('/', (req, res) => {
    res.json({ message: 'welcome to pilot api!' });   
});

routerPilot.get('/pilots', (req, res) => {
    Pilots.find((err, pilots) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({pilots});
        }
    });
});

routerPilot.post('/pilots', (req, res) => {
    var pp = new Pilots();
    pp.name = req.body.name;
    pp.rank = req.body.rank;
    pp.age = req.body.age;
    pp.skills = req.body.skills;
    pp.meth = req.body.meth;

    pp.save(  err => {
        if (err) {
            res.status(500).json({ error: err });
        }
        res.json({ message: 'Pilot create!' });

    });
        
});

routerPilot.get('/pilots/:pilot_id', (req, res) => {
    console.log("get pilot by id")
    console.log(req.params)
    Pilots.findById(req.params.pilot_id, (err, pilot) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({pilot});
        }
    });
});

routerPilot.put('/pilots/:pilot_id', (req, res) => {
    Pilots.findById(req.params.pilot_id, (err, pilot) => {
        if (err) {
            res.send(err);
        }
        console.log("put")
        console.log(req.body)
        pilot.name = req.body.name;  
        pilot.rank = req.body.rank;
        pilot.age = req.body.age;
        pilot.skills = req.body.skills;
        pilot.meth = req.body.meth;
        pilot.save(err =>  {
            if (err) {
                res.status(500).json({ error: err });
            } 
            res.json({ message: 'Pilot updated!' });
        });

    });
});

routerPilot.delete('/pilots/:pilot_id', (req, res) => {
    console.log(req.params.pilot_id);
    Pilots.remove({ 
        _id: req.params.pilot_id
    }, (err, pilot) => {
        if (err) {
            res.status(500).json({ error: err });
        } 
        res.json({ message: 'Successfully deleted' });
    });
});

routerPilot.delete('/pilots/removemeth/:meth', (req, res) => {
    console.log("server pilot meth");
    console.log(req.params.meth);
    Pilots.remove({ 
        meth: req.params.meth
    }, (err, pilot) => {
        if (err) {
            res.status(500).json({ error: err });
        } 
        res.json({ message: 'Successfully deleted' });
    });
});
module.exports = routerPilot;


