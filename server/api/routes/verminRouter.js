const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
      cb(null, './uploads/');
  },
  filename: function(req, file, cb){
      cb(null, file.originalname); 
  }
});

constfileFilter = (req, file, cb) => {
  //reject a file
  if(file.mimetype === 'image/png'){
    cb(null, true);
  } else{
    cb(null, false); 
  }
};

//relative path
const upload = multer({storage: storage, fileFilter: fileFilter});


const evo1 = require('../models/evo1Model'); 


  
  //Use express for things that don't have to be updated live

  //Any number of handlers can be called before callback
  // function starts
  //upload.single() means you just want to upload a single file
  router.post('/', upload.single('verminImage'),(req, res, next) => {
    console.log(req.file);
    const myData = new evo1({
      _id: new mongoose.Types.ObjectId(),
      lifes: req.body.lifes,
      muscle: req.body.muscle,
      blast: req.body.blast,
      guard: req.body.guard,
      fast: req.body.fast,
      evo1Image: req.file.path
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