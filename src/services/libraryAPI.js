import axios from "axios";
const URL = "https://nuetzi-games-express.herokuapp.com/library";

export function getLibrary () {
    const response = axios.get(URL);
    return response;
};

export function getGame(id) {
    const response = axios.get(`${URL}${id}`);
    return response;
};

export function deleteGame(id) {
    const response = axios.delete(`${URL}${id}`);
    return response;
};

export function addGame(addedGame) {
    const response = axios.post(URL, addedGame);
    return response;
};

export function editUser(id, updatedUser) {
    const response = axios.put(`${URL}${id}`, updatedUser);
    return response;
};