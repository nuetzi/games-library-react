import axios from "axios";
const Top50_URL = "https://nuetzi-games-express.herokuapp.com/top50/";

export function getTop50() {
    const response = axios.get(Top50_URL);
    return response;
};

export function getTop50Game(id) {
    const response = axios.get(`${Top50_URL}${id}`);
    return response;
};