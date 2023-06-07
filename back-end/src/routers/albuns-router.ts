
import { Router } from "express";
import { getAlbum, getMyAlbuns } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const albumRouter = Router();

albumRouter.get('/all', authenticateToken, getAlbum)

albumRouter.get('/my', authenticateToken, getMyAlbuns)

export {albumRouter};
 