"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    IndexRoutes.prototype.routes = function () {
        this.router.get('/', function (req, res) { return res.send('hello'); });
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
indexRoutes.routes();
exports.default = indexRoutes.routes;
