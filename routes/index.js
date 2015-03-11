var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtrl.list(req,res);
});

/*GET new note page */
router.get('/newnote',function(req, res){
	return standupCtrl.getNote(req,res);
});


/* POST new note page */
router.post('/newnote',function(req,res){
	return standupCtrl.create(req,res);
});


module.exports = router;
