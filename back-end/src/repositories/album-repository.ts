import { prisma } from './../config/database';



async function getAllAlbuns() {

    return prisma.album.findMany({
        
    })
}

async function getMyAlbunsWithUserId(userId:number) {

  return prisma.album.findMany({
      where: {
        Pages: {
          some: {
            Figurinhas: {
              some:{
                UserFigurinha:{
                  some:{
                    userId
                  }
                }
              }
            }
          }
        }
      },
      select: {
        id: true,
        name: true,
        cover: true,
        Pages:{
          select:{
            id:true,
            Figurinhas:{
              select:{
                id:true,
                UserFigurinha:{
                  select:{
                    id:true
                  },
                  where:{
                    userId
                  }
                }
              }
            }
          }
        }
        
        
      }
      
  })
}

async function getAlbumById(albumId:number, userId:number) {

  return prisma.album.findUnique({
      where:{
        id: albumId
      },
      include: {
        Pages: {
          include: {
            Figurinhas: {
              include: {
                UserFigurinha:{
                  where:{
                    userId
                  }
                }
              }
            }
          }
        }
      }
  })
}
 
const albumRepository = {
  getAllAlbuns,
  getMyAlbunsWithUserId,
  getAlbumById
}

export default albumRepository