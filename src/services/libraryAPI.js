import axios from "axios";
const LIBRARY_URL = "https://nuetzi-games-express.herokuapp.com/library/";
const GAMES_URL = "https://nuetzi-games-express.herokuapp.com/igdb/";

export function getLibrary () {
    const response = axios.get(LIBRARY_URL);
    return response;
};

export function getGame(id) {
    const response = axios.get(`${LIBRARY_URL}${id}`);
    return response;
};

export function deleteGame(id) {
    const response = axios.delete(`${LIBRARY_URL}${id}`);
    return response;
};

export function addGame(addedGame) {
    const response = axios.post(LIBRARY_URL, addedGame);
    return response;
};

export function editGame(id, updatedGame) {
    const response = axios.put(`${LIBRARY_URL}${id}`, updatedGame);
    return response;
};