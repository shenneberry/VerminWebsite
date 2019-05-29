const fs = require('fs');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const path = require('path');


// const multer = require('multer');
// const storage = multer.diskStorage({
//   //defines which folder the file should be stored to
//   destination: function(req, file, cb){
//     //Enquire: why should null be passed here?
//     //Node style callback. Passing a null means no error  
//     cb(null, './uploads/');
//   },
//   //defines how the file should be named
//   filename: function(req, file, cb){
//       cb(null, file.originalname); 
//   }
// });

// const fileFilter = (req, file, cb) => {
//   //reject a file
//   if(file.mimetype === 'image/png'){
//     cb(null, true);
//   } else{
//     cb(null, false); 
//   }
// };

// //relative path to storage destination w/filters
// const upload = multer({storage: storage, fileFilter: fileFilter});

//Import vermin model
var VerminModel = require('../models/verminModel.js');

var curTourDirName= path.join(__dirname, '..', '..', '..', 'vermin-pics', 'tournament1'); 
  
  //Use express for things that don't have to be updated live

  //Any number of handlers can be executed before callback
  // function starts
  //upload.single() means you just want to upload a single file
  router.post('/', (req, res, next) => {
    console.log(req.body);
    const vermin = new VerminModel({
      _id: new mongoose.Types.ObjectId(),
      //parses data from url endcoded body
      name: req.body.verminName,
      evo1: {
        evoLevel: 1,
        evo1Image: req.body.stringCanvas1,
        lifes: req.body.lifes1,
        muscle: req.body.muscle1,
        blast: req.body.blast1,
        guard: req.body.guard1,
        fast: req.body.fast1
      },
      evo2: {
        evoLevel: 2,
        evo2Image: req.body.stringCanvas2,
        lifes: req.body.lifes2,
        muscle: req.body.muscle2,
        blast: req.body.blast2,
        guard: req.body.guard2,
        fast: req.body.fast2
      },
      evo3: {
        evoLevel: 3,
        evo3Image: req.body.stringCanvas3,
        lifes: req.body.lifes3,
        muscle: req.body.muscle3,
        blast: req.body.blast3,
        guard: req.body.guard3,
        fast: req.body.fast3
      }
    });
    console.log('alert1');

     vermin
     .save()
     .then(result => {
       console.log(result);
        res.status(200).json({
        message: 'Handling POST requests to /vermin',
        createdVermin: vermin
      });
     })
     .catch(err => {
        console.log(err);
         res.status(500).json({error: err});
      }); 

      //convert png strings to pngs and save to 
      // 'uploads' directory
      
      
      if(!fs.existsSync(curTourDirName)){
        fs.mkdirSync(curTourDirName);
        //var checkEvo1File = req.body.verminName + '.png'; 
        

      }else{
        var verminNameCheckPath = path.join(__dirname, '..', '..', '..', 'vermin-pics', 'tournament1', req.body.verminName);
        if(!fs.existsSync(verminNameCheckPath)){
          fs. mkdirSync(verminNameCheckPath);
          var checkEvo1FilePath = path.join(__dirname, '..', '..', '..', 'vermin-pics', 'tournament1', req.body.verminName, 'evo1.png');
          try{
            if(!fs.existsSync(checkEvo1FilePath)){
              var canvas164String = req.body.stringCanvas1; 
              canvas164String = canvas164String.split(';base64,').pop();
              fs.writeFile(checkEvo1FilePath, canvas164String, {encoding: 'base64'}, function(err) {
                  if(err){
                    return console.log(err);
                  }
                  console.log("file was saved"); 
              });
            }else{
              console.log("can't create file!");
            }
          } catch(err){
            console.error(err);
          }

          var checkEvo2FilePath = path.join(__dirname, '..', '..', '..', 'vermin-pics', 'tournament1', req.body.verminName, 'evo2.png');
          try{
            if(!fs.existsSync(checkEvo2FilePath)){
              var canvas264String = req.body.stringCanvas2; 
              canvas264String = canvas264String.split(';base64,').pop();
              fs.writeFile(checkEvo2FilePath, canvas264String, {encoding: 'base64'}, function(err) {
                  if(err){
                    return console.log(err);
                  }
                  console.log("file was saved"); 
              });
            }else{
              console.log("can't create file!");
            }
          } catch(err){
            console.error(err);
          }

          var checkEvo3FilePath = path.join(__dirname, '..', '..', '..', 'vermin-pics', 'tournament1', req.body.verminName, 'evo3.png');
          try{
            if(!fs.existsSync(checkEvo3FilePath)){
              var canvas364String = req.body.stringCanvas3; 
              canvas364String = canvas364String.split(';base64,').pop();
              fs.writeFile(checkEvo3FilePath, canvas364String, {encoding: 'base64'}, function(err) {
                  if(err){
                    return console.log(err);
                  }
                  console.log("file was saved"); 
              });
            }else{
              console.log("can't create file!");
            }
          } catch(err){
            console.error(err);
          }
        }else{
          
          console.log('vermin directory already exists!'); 
        }
       
         
        console.log(curTourDirName + " already exists!");
      }

        


      


      // //fs.mkdirSync('uploads3');
      // fs.writeFile('./uploads/testPNG4.png', canvas164String, {encoding: 'base64'}, function(err) {
      //   if(err){
      //     return console.log(err);
      //   }
      //   console.log("file was saved"); 
      // });
      // next();   
  });

  //double colon indicates a variable. 
  router.get('/:verminId', (req, res, next) => {
     const id = req.params.verminId;
      VerminModel.findById(id)
      .exec()
      .then(doc => {
        console.log("From Database", doc);
        res.status(200).json(doc); 
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
      }); 
  });

  //go back to API video to review proper patching
  // router.patch('/:verminId', (req, res, next) => {
  //   const id = req.params.verminId;
  //   const updateOps = {};
  //   for (const ops of req.body){
  //     updateOps[ops.propName] = ops.value; 
  //   }
  //   VerminModel.update({_id: id}, { $set: updateOps })
  //   .exec()
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500); 
  //   }); 
  // });

  // router.delete('/:verminId', (req, res, next) => {
  //     const id = req.params.verminId;
  //     evo1.remove({_id: id})
  //     .exec()
  //     .then(result => {
  //       res.status(200);
  //     })
  //     .catch(err => {

  //     }); 
  //   })


  router.get('/', (req, res, next) => {
      VerminModel.find()
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
      }); 
      next();
  });


  module.exports = router;