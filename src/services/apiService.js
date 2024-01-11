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
const getQuizByUser = () => {
    return axios.get("api/v1/quiz-by-participant")
}
const getQuizById = (id) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${id}`)
}
const submitAnswer = (payload) => {
    return axios.post(`api/v1/quiz-submit`, {...payload});
}
const postcreateQuiz = (description, name, img, diff) => {
    const data = new FormData;
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', diff);
    data.append('quizImage', img);
    return axios.post('api/v1/quiz', data);
}
const getAllQuiz = () => {
    return axios.get(`api/v1/quiz/all`);
}
const deleteQuiz = (id) => {
    return axios.delete(`api/v1/quiz/${id}`);
}
const getQuiz = (id) => {
    return axios.get(`api/v1/quiz/${id}`);
}
const updateQuiz = (id, description, name, difficulty, image) => {
    const data = new FormData;
    data.append("id", id);
    data.append("description", description);
    data.append("name", name);
    data.append("difficulty", difficulty);
    data.append("quizImage", image);
    return axios.put(`api/v1/quiz`,data);
}
export {
    postCreateUser,
    listUser,
    putUpdateUser,
    deleteUser,
    getUserPaginate,
    login,
    register,
    getQuizByUser,
    getQuizById,
    submitAnswer,
    postcreateQuiz,
    getAllQuiz,
    deleteQuiz,
    getQuiz,
    updateQuiz
}