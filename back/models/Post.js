var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = Schema({
    extracto: {type: String, required: true},
    contenido: {type: String, required: true},
    media: {type: String, required: false},
    tipo: {type: String, required: true}, 
    privacidad: {type: String, required: true}, 
    usuario: {type: Schema.ObjectId, ref: 'usuario', required: true},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('post',PostSchema);