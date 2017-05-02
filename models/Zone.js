var mongoose= require('mongoose')
var Schema = require('mongoose').Schema
var model = require('mongoose').model

var ZoneSchema = new Schema({
    name: {type:String, default:''},
    ZipCodes: {type:Array, default:[]},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)
