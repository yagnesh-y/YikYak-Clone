var mongoose= require('mongoose')
var Schema = require('mongoose').Schema

var CommentSchema = new Schema({
    username: {type:String, default:''},
    body: {type:String, default:''},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('CommentSchema', CommentSchema)
