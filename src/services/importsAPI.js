import axios from "axios";
const TOP_RATED_URL = "https://nuetzi-games-express.herokuapp.com/toprated/";
const TOP_NES_URL = "https://nuetzi-games-express.herokuapp.com/topnes/";
const TOP_SNES_URL = "https://nuetzi-games-express.herokuapp.com/topsnes/";
const TOP_N64_URL = "https://nuetzi-games-express.herokuapp.com/topn64/";
const TOP_GAMECUBE_URL = "https://nuetzi-games-express.herokuapp.com/topgamecube/";
const TOP_WII_URL = "https://nuetzi-games-express.herokuapp.com/topwii/";
const TOP_WIIU_URL = "https://nuetzi-games-express.herokuapp.com/topwiiu/";
const TOP_SWITCH_URL = "https://nuetzi-games-express.herokuapp.com/topswitch/";
const TOP_PS1_URL = "https://nuetzi-games-express.herokuapp.com/topps1/";
const TOP_PS2_URL = "https://nuetzi-games-express.herokuapp.com/topps2/";
const TOP_PS3_URL = "https://nuetzi-games-express.herokuapp.com/topps3/";
const TOP_PS4_URL = "https://nuetzi-games-express.herokuapp.com/topps4/";
const TOP_PS5_URL = "https://nuetzi-games-express.herokuapp.com/topps5/";

export function getTopRated() {
    const response = axios.get(`${TOP_RATED_URL}`);
    return response;
};

export function getTopNES() {
    const response = axios.get(`${TOP_NES_URL}`);
    return response;
};

export function getTopSNES() {
    const response = axios.get(`${TOP_SNES_URL}`);
    return response;
};

export function getTopN64() {
    const response = axios.get(`${TOP_N64_URL}`);
    return response;
};

export function getTopGamecube() {
    const response = axios.get(`${TOP_GAMECUBE_URL}`);
    return response;
};

export function getTopWii() {
    const response = axios.get(`${TOP_WII_URL}`);
    return response;
};

export function getTopWiiU() {
    const response = axios.get(`${TOP_WIIU_URL}`);
    return response;
};

export function getTopSwitch() {
    const response = axios.get(`${TOP_SWITCH_URL}`);
    return response;
};

export function getTopPS1() {
    const response = axios.get(`${TOP_PS1_URL}`);
    return response;
};

export function getTopPS2() {
    const response = axios.get(`${TOP_PS2_URL}`);
    return response;
};

export function getTopPS3() {
    const response = axios.get(`${TOP_PS3_URL}`);
    return response;
};

export function getTopPS4() {
    const response = axios.get(`${TOP_PS4_URL}`);
    return response;
};

export function getTopPS5() {
    const response = axios.get(`${TOP_PS5_URL}`);
    return response;
};

// export function getGame(id) {
//     const response = axios.get(`${TOP_RATED_URL}${id}`);
//     return response;
// };


