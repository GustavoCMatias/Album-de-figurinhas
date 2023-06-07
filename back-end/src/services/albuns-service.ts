import { forbiddenError, notFoundError } from '@/errors';
import albumRepository from '@/repositories/album-repository';

async function getAlbum() {
  const albuns = await albumRepository.getAllAlbuns();
  return albuns
}

async function getMyAlbuns(userId: number) {
  const albuns = await albumRepository.getMyAlbunsWithUserId(userId);

  const formatedAlbuns = albuns.map((item) => {
    let total = 0;
    let owned = 0;
    for (let i = 0; i < item.Pages.length; i++) {
      for (let j = 0; j < item.Pages[i].Figurinhas.length; j++) {
        total+=1;
        if(item.Pages[i].Figurinhas[j].UserFigurinha.length >0){
          owned+=1
        }
      }

    }
    return {
      id: item.id,
      name: item.name,
      cover: item.cover,
      total_figurinhas: total,
      owned_figurinhas: owned
    }
  })
  return formatedAlbuns
}

async function getAlbumById(userId: number, albumId: number) {

  const albuns = await albumRepository.getAlbumById(albumId, userId);
  
  if(!albuns) throw notFoundError()
  let UserHasAlbum = false

  const pagesWithHiddenFigurinhas = albuns.Pages.map((item => {
    return {
      ...item,
      Figurinhas: item.Figurinhas.map((each) => {
        if(each.UserFigurinha.length>0) UserHasAlbum = true
        return {
          ...each,
          image: each.UserFigurinha.length>0?each.image:'',
          name: each.UserFigurinha.length>0?each.name:'',
          description: each.UserFigurinha.length>0?each.description:'',
          UserFigurinha: undefined
        }
      })
    }
  }))

  if(!UserHasAlbum) throw forbiddenError()


  const albunsWithHiddenFigurinhas = {
    ...albuns,
    Pages: pagesWithHiddenFigurinhas
  }


  return albunsWithHiddenFigurinhas
}

const albumService = {
  getAlbum,
  getMyAlbuns,
  getAlbumById
}
export default albumService 