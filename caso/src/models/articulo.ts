import {Schema, model} from 'mongoose';

const ArticuloSchema = new Schema({
    owner: {type:String, required:true},
    ownerEmail:{type:String, required:true},
    year:{type:String, required:true},
    name:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    picture: String,
    price:{type:Number, required:true},
    date: Date,
    buyer:{type:String, required:false}
});

export default model('Articulo', ArticuloSchema);