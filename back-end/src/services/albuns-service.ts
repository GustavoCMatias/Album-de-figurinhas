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

const albumService = {
  getAlbum,
  getMyAlbuns
}
export default albumService 