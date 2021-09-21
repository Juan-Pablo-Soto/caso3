import {Request, Response, Router} from 'express';

import Articulo from '../models/articulo';

class ArticuloRoutes{
    router: Router;

    constructor(){
        this.router=Router();
        this.routes();
    }

    async getArticulos(req: Request, res: Response){
        const articulos= await Articulo.find();
        res.json(articulos);
    }

    getArticulo(req:Request, res:Response){
        console.log(req.body);
        res.json('Received');
    }

    async createArticulo(req:Request, res:Response){
        const {owner, ownerEmail, year, name, description, picture, price, date} = req.body;
        const newArticulo = new Articulo({owner, ownerEmail, year, name, description, picture, price, date});
        await newArticulo.save();
        res.json({data:newArticulo});
    }

    updateArticulo(){

    }

    deleteArticulo(){

    }

    routes(){
        this.router.get('/posts', this.getArticulos);
        this.router.get('/posts:url', this.getArticulo);
        this.router.post('/posts', this.createArticulo);
        this.router.put('post:url', this.updateArticulo);
        this.router.delete('/posts:url', this.deleteArticulo);
    }


}

const articuloRoutes = new ArticuloRoutes();

export default articuloRoutes.router;