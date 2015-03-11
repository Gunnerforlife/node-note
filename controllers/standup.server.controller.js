var Standup = require('../models/standup.server.model.js');

exports.list = function(req,res){
	var query = Standup.find();
	query.sort({createdOn:'desc'})
		.limit(12)
		.exec(function(err,results){
			res.render('index',{title:'Standup-List',notes:results});
		});
}

exports.create = function(req, res){
	console.log('fuck dude');
	console.log('req name'+req.body.memberName);
	var entry = new Standup({
		memberName : req.body.memberName,
		project : req.body.project,
		workYesterday : req.body.workYesterday,
		workToday : req.body.workToday,
		impediment : req.body.impediment
	});

	entry.save(function(err){
		if(err){
			var errMsg = 'Sorry, there was an error saving your note.';
			res.render('newnote',{title:'Standup-New Note(error)',message:errMsg});
		}else{
			res.redirect(301,'/');
		}
	});

}

exports.getNote = function (req, res){
	res.render('newnote', { title: 'Standup- new Note'});
}