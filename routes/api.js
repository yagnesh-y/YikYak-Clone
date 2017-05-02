var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController')
var controllers = require('../controllers')
/* GET users listing. */
router.get('/:resource', function(req, res, next) {

  var resource = req.params.resource
  var controller = controllers[resource]
  
  if(controller == null) {
    res.json({
      confirmation: 'failure',
      message: 'Not a valid resource '+ resource
    })
    return
  }
  controller.find({}, function(err, results){
      if(err){
        res.json({
          confirmation: 'failure',
          message: err
        })
        return
      }
      res.json({
        confirmation: 'success',
        results: results
      })
    })
});

router.get('/:resource/:id', function(req, res, next){
 var resource = req.params.resource
 var id = req.params.id
 var controller = controllers[resource]
 if(controller == null) {
    res.json({
      confirmation: 'failure',
      message: 'Not a valid resource '+ resource
    })
    return
  }
  controller.findByID(id, function(err, result){
      if(err){
        res.json({
          confirmation: 'failure',
          message: err
        })
        return
      }
      res.json({
        confirmation: 'success',
        results: result
      })
    })
});


  router.post('/:resource', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]
  if(controller == null) {
    res.json({
      confirmation: 'failure',
      message: 'Not a valid resource '+ resource
    })
    return
  }
    controller.create(req.body, function(err, result){
      if(err){
        res.json({
          confirmation: 'failure',
          message: err
        })
        return
      }
      res.json({
        confirmation: 'success',
        results: result
      })
    })
  });

  router.get('/:resource/delete/:id', function(req, res, next){
  var resource = req.params.resource
  var id = req.params.id
  var controller = controllers[resource]
  if(controller == null) {
    res.json({
      confirmation: 'failure',
      message: 'Not a valid resource '+ resource
    })
    return
  }
    controller.delete(id, function(err, result){
      if(err){
        res.json({
          confirmation: 'failure',
          message: err
        })
        return
      }
      res.json({
        confirmation: 'success',
        results: result
      })
    })
  });

module.exports = router;
