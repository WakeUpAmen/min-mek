'use strict';
const express    = require('express');        
const routerMeth = express.Router();     

const Meths     = require('./meth-module');

routerMeth.get('/', (req, res) => {
    res.json({ message: 'welcome to meth api!' });   
});

routerMeth.get('/meths', (req, res) => {
    Meths.find((err, meths) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({meths});
        }
    });
});

routerMeth.post('/meths', (req, res) => {
    var mm = new Meths();
    mm.name = req.body.name;
    mm.model = req.body.model;
    mm.weight = req.body.weight;
    mm.cclass = req.body.cclass;
    mm.save(  err => {
        if (err) {
            res.status(500).json({ error: err });
        }
        res.json({ message: 'Meth create!' });

    });
        
});

routerMeth.get('/meths/:meth_id', (req, res) => {
    console.log("get meth by id")
    console.log(req.params)
    Meths.findById(req.params.meth_id, (err, meth) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({meth});
        }
    });
});

routerMeth.put('/meths/:meth_id', (req, res) => {
    Meths.findById(req.params.meth_id, (err, meth) => {
        if (err) {
            res.send(err);
        }
        console.log("put")
        console.log(req.body)
        meth.name = req.body.name;
        meth.model = req.body.model;
        meth.weight = req.body.weight;
        meth.cclass = req.body.cclass;  
        meth.save(err =>  {
            if (err) {
                res.status(500).json({ error: err });
            } 
            res.json({ message: 'Meth updated!' });
        });

    });
});

routerMeth.delete('/meths/:meth_id', (req, res) => {
    console.log(req.params.meth_id);
    Meths.remove({ 
        _id: req.params.meth_id
    }, (err, meth) => {
        if (err) {
            res.status(500).json({ error: err });
        } 
        console.log(meth)
        res.json({ message: 'Successfully deleted' });
    });
});
module.exports = routerMeth;


