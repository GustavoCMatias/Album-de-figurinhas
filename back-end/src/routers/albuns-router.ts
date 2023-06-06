
import { Router } from "express";
import { getAlbum } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const albumRouter = Router();

albumRouter.get('/all', authenticateToken, getAlbum)

export {albumRouter};
