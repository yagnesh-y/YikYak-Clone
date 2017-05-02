var Zone = require('../models/Zone')

module.exports = {

    find: function(params, callback){
        Zone.find(params, function(err, zones){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zones)
        })
    },

    findByID: function(id, callback){
        Zone.findById(id, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

    create: function(params, callback){
        var zipcodes = params['ZipCodes']
        var zips = zipcodes.split(',')
        var newZip =[]
        zips.forEach(function(z){
            newZip.push(z.trim())
        })
        params['ZipCodes'] = newZip
        Zone.create(params, function(err,res){
            if(err){
                callback(err, null)
                return
            }
            callback(null, res)
        })
    },

    update: function(id, params, callback){
         Zone.findOneAndUpdate(id, params, {new:true}, function(err,res){
            if(err){
                callback(err, null)
                return
            }
            callback(null, res)
        })
    },

    delete: function(id){
         Zone.findByIdAndRemove(id, function(err,res){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null)
        })
    }
}