import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import indexRoutes from './routes/indexRoutes';
import postRoutes from './routes/PostRoutes';

class Server {
    app: express.Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(){
        //mongoose
        const MONGO_URI='mongodb://localhost:27017/test';
        //mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL)
        .then(db=>console.log('DB is connected'));
        //senttings
        this.app.set('port', process.env.PORT || 3000);
        //middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api',postRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();