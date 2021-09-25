"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var ArticuloRoutes_1 = __importDefault(require("./routes/ArticuloRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        //mongoose
        var MONGO_URI = 'mongodb://localhost:27017/test';
        //mongoose.set('useFindAndModify', true);
        mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL)
            .then(function (db) { return console.log('DB is connected'); });
        //senttings
        this.app.set('port', process.env.PORT || 3000);
        //middlewares
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
    };
    Server.prototype.routes = function () {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/articulos', ArticuloRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on port', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
