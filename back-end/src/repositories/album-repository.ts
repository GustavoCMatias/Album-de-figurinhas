import { prisma } from './../config/database';



async function getAllAlbuns() {

    return prisma.album.findMany({
        
    })
}

const albumRepository = {
  getAllAlbuns
}

export default albumRepository