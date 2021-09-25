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

    async getArticulo(req:Request, res:Response){
        const {url} = req.params;
        console.log(url);
        const articulo = await Articulo.findOne({name:url});
        res.json({data:articulo});
    }

    async createArticulo(req:Request, res:Response){
        const {owner, ownerEmail, year, name, description, picture, price, date} = req.body;
        const newArticulo = new Articulo({owner, ownerEmail, year, name, description, picture, price, date});
        await newArticulo.save();
        res.json({data:newArticulo});
    }

    async updateArticulo(req:Request, res:Response):Promise<void>{
        const {url} = req.params;
        console.log(url);
        const articulo = await Articulo.findOneAndUpdate({url}, req.body, {new:true});
        res.json({status: res.status , data: articulo});
    }

    async deleteArticulo(req: Request, res:Response){
        const {name}=req.params; 
        console.log(name);
        await Articulo.findOneAndDelete({name});
        res.json({response: "Articulo eliminado"});
    }

    routes(){
        this.router.get('/', this.getArticulos);
        this.router.get('/:url', this.getArticulo);
        this.router.post('/', this.createArticulo);
        this.router.put('/:url', this.updateArticulo);
        this.router.delete('/:url', this.deleteArticulo);
    }


}

const articuloRoutes = new ArticuloRoutes();

export default articuloRoutes.router;
