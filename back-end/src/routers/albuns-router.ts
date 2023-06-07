
import { Router } from "express";
import { getAlbum, getAlbumById, getMyAlbuns } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const albumRouter = Router();

albumRouter.get('/all', authenticateToken, getAlbum)

albumRouter.get('/my', authenticateToken, getMyAlbuns)

albumRouter.get('/:albumId', authenticateToken, getAlbumById)

export {albumRouter};
 