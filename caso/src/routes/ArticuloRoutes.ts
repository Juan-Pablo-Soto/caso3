import {Request, Response, Router} from 'express';

import Articulo from '../models/articulo';

class ArticuloRoutes{
    router: Router;

    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getArticulos(req: Request, res: Response){
        const articulos= await Articulo.find();
        res.json(articulos);
    }

    public async getArticulo(req:Request, res:Response){
        console.log(req.body);
        res.json('Received');
    }

    async createArticulo(req:Request, res:Response){
        const {owner, ownerEmail, year, name, description, picture, price, date} = req.body;
        const newArticulo = new Articulo({owner, ownerEmail, year, name, description, picture, price, date});
        await newArticulo.save();
    }

    async updateArticulo(req:Request, res:Response){
        res.json('Received');
    }

    async deleteArticulo(req:Request, res:Response){
        res.json('Received');
    }

    routes(){
        this.router.get('/articulo/get', this.getArticulos);
        this.router.get('/articulo/get:url', this.getArticulo);
        this.router.post('/articulo/post', this.createArticulo);
        this.router.put('/articulo/put:url', this.updateArticulo);
        this.router.delete('/articulo/delete:url', this.deleteArticulo);    
    }
}

const articuloRoutes = new ArticuloRoutes();

export default articuloRoutes.router;