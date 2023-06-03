import axios from "axios";

function signUp(body) {
    return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, body);
}

function singIn(body) {
    return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-in`, body);
}
 

const apiAuth = {
    signUp,
    singIn
}
export default apiAuth;