import {Request, Response, Router} from 'express';

import Articulo from '../models/articulo';

class PostRoutes{
    router: Router;

    constructor(){
        this.router=Router();
        this.routes();
    }

    async getPosts(req: Request, res: Response){
        const articulos= await Articulo.find();
        res.json(articulos);
    }

    getPost(req:Request, res:Response){
        console.log(req.body);
        res.json('Received');
    }

    async createPost(req:Request, res:Response){
        const {owner, ownerEmail, year, name, description, picture, price, date} = req.body;
        const newArticulo = new Articulo({owner, ownerEmail, year, name, description, picture, price, date});
        await newArticulo.save();
        res.json({data:newArticulo});
    }

    updatePost(){

    }

    deletePost(){

    }

    routes(){
        //this.router.get('/posts', this.getPosts);
        //this.router.get('/posts:url', this.getPost);
        //this.router.post('/posts', this.createPost);
       // this.router.put('post:url', this.updatePost);
        //this.router.delete('/posts:url', this.deletePost);
    }


}

const postRoutes = new PostRoutes();

export default postRoutes.router;