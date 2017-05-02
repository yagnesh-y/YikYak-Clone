var Comment = require('../models/Comment')

module.exports = {

    find: function(params, callback){
        Comment.find(params, function(err, Comments){
            if(err){
                callback(err, null)
                return
            }
            callback(null, Comments)
        })
    },

    findByID: function(id, callback){
        Comment.findById(id, function(err, Comment){
            if(err){
                callback(err, null)
                return
            }
            callback(null, Comment)
        })
    },

    create: function(params, callback){
        Comment.create(params, function(err,res){
            if(err){
                callback(err, null)
                return
            }
            callback(null, res)
        })
    },

    update: function(id, params, callback){
         Comment.findOneAndUpdate(id, params, {new:true}, function(err,res){
            if(err){
                callback(err, null)
                return
            }
            callback(null, res)
        })
    },

    delete: function(id, callback){
         Comment.findByIdAndRemove(id, function(err,res){
            if(err){
                callback(err, null)
                return
            }
            callback(null, res)
        })
    }
}