import albumRepository from '@/repositories/album-repository';

async function getAlbum() {
    const users = await albumRepository.getAllAlbuns();
    return users
}

const albumService = {
  getAlbum
}
export default albumService