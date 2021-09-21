"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
new mongoose_1.Schema({
    owner: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    year: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    buyer: { type: String, required: false }
});
