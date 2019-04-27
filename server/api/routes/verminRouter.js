const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

const evo1 = require('../models/evo1Model'); 


  
  //Use express for things that don't have to be updated live
  router.post('/', (req, res, next) => {  
    var myData = new evo1({
      _id: new mongoose.Types.ObjectId(),
      lifes: req.body.lifes,
      muscle: req.body.muscle,
      blast: req.body.blast,
      guard: req.body.guard,
      fast: req.body.fast
    });
     myData
     .save()
     .then(item => {
       console.log(item);
     })
     .catch(err => console.log(err));
       res.status(201).send("unable to save to database");
    res.status(201).json({
      createdVermin: myData
    })
  });

  //double colon indicates a variable. 
  router.get('/:verminId', (req, res, next) => {
     const id = req.params.verminId;
      evo1.findById(id)
      .exec()
      .then(doc => {
        console.log("From Database", doc);
        res.status(200).json(doc); 
      })
      .catch(err => {
        console.log(err);
      })
  });

  router.patch('/:verminId', (req, res, next) => {
    const id = req.params.verminId;
    const updateOps = {};
    for (const ops of req.body){
      updateOps[ops.propName] = ops.value; 
    }
    evo1.update({_id: id}, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500); 
    }); 
  });

  router.delete('/:verminId', (req, res, next) => {
      const id = req.params.verminId;
      evo1.remove({_id: id})
      .exec()
      .then(result => {
        res.status(200);
      })
      .catch(err => {

      }) 
    });


  router.get('/', (req, res, next) => {
      evo1.find()
      .select ('lifes muscle blast guard fast vermin_id')
      .exec()
      .then(docs => {
        console.log("From Database", docs);
        const response = {
          count: docs.length,
          verminLinks: docs.map(doc => {
              return {
                lifes: doc.lifes,
                muscle: doc.muscle,
                _id: doc._id,
                request: {
                  type: 'GET',
                  url: 'http://localhost:4000/vermin/' + doc._id
                }
              }
          })
        };
        res.status(200).json(response); 
      })
      .catch(err => {
        console.log(err);
      })
  });
  module.exports = router;