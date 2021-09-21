"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ArticuloSchema = new mongoose_1.Schema({
    owner: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    year: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    picture: String,
    price: { type: Number, required: true },
    date: Date,
    buyer: { type: String, required: false }
});
exports.default = (0, mongoose_1.model)('Articulo', ArticuloSchema);
