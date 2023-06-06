import { NextFunction } from 'express';
import { Request, Response } from 'express';
import albumService from '@/services/albuns-service';


export async function getAlbum(_req: Request, res: Response, next: NextFunction) {
    try{
        const users = await albumService.getAlbum()
        res.status(200).send(users)
    }catch(err){
        next(err);
    }
}

