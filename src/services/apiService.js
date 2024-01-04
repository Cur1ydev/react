import axios from "../utils/axiosCustom";

const postCreateUser = (email, password, username, role, img) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.post('api/v1/participant', data);
}
const listUser = () => {
    return axios.get('api/v1/participant/all')
}
const putUpdateUser = (id, username, role, img) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.put('api/v1/participant', data);
}
const deleteUser = (id) => {
    return axios.delete('api/v1/participant', {data: {id: id}});
}
const getUserPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}
const login = (email, password) => {
    return axios.post('api/v1/login', {
        email, password
    });
}
const register = (email, password, username) => {
    return axios.post('api/v1/register', {
        email, password, username
    });
}
export {postCreateUser, listUser, putUpdateUser, deleteUser, getUserPaginate, login, register}