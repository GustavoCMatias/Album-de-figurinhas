import axios from "axios";

function getMyAlbuns(token) {
    return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/album/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
}



function getAllAlbuns(token) {
    return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/album/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
}

function getSpecificAlbum(albumId, token) {
    return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/album/${albumId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
}
 

const apiAlbum = {
    getMyAlbuns,
    getAllAlbuns,
    getSpecificAlbum
}
export default apiAlbum;