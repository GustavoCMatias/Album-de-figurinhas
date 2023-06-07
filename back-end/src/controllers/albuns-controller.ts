import { NextFunction } from 'express';
import { Request, Response } from 'express';
import albumService from '@/services/albuns-service';
import { AuthenticatedRequest } from '@/middlewares';


export async function getAlbum(_req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try{
        const albuns = await albumService.getAlbum()
        res.status(200).send(albuns)
    }catch(err){
        next(err);
    }
} 

export async function getMyAlbuns(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const userId = req.userId;
    try{
        const myAlbuns = await albumService.getMyAlbuns(userId)
        res.status(200).send(myAlbuns)
    }catch(err){
        next(err);
    }
} 

export async function getAlbumById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const userId = req.userId;
    const {albumId} = req.params;
    try{
        const albumInfo = await albumService.getAlbumById(userId, Number(albumId))
        res.status(200).send(albumInfo)
    }catch(err){
        next(err);
    }
} 

