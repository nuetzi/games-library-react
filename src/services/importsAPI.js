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
const TOP_XBOX_URL = "https://nuetzi-games-express.herokuapp.com/xbox/";
const TOP_XBOX360_URL = "https://nuetzi-games-express.herokuapp.com/xbox360/";
const TOP_XBOXONE_URL = "https://nuetzi-games-express.herokuapp.com/xboxone/";
const TOP_XBOXSERIESX_URL = "https://nuetzi-games-express.herokuapp.com/xboxseriesx/";
const TOP_GENESIS_URL = "https://nuetzi-games-express.herokuapp.com/topgenesis/";
const TOP_SATURN_URL = "https://nuetzi-games-express.herokuapp.com/topsaturn/";
const TOP_DREAMCAST_URL = "https://nuetzi-games-express.herokuapp.com/topdreamcast/";
const TOP_GAMEBOY_URL = "https://nuetzi-games-express.herokuapp.com/topgameboy/";
const TOP_GAMEBOYCOLOR_URL = "https://nuetzi-games-express.herokuapp.com/topgbc/";
const TOP_GAMEBOYADVANCE_URL = "https://nuetzi-games-express.herokuapp.com/topgba/";
const TOP_GAMEGEAR_URL = "https://nuetzi-games-express.herokuapp.com/topgamegear/";
const TOP_NINTENDODS_URL = "https://nuetzi-games-express.herokuapp.com/topnintendods/";
const TOP_3DS_URL = "https://nuetzi-games-express.herokuapp.com/top3ds/";
const TOP_PSP_URL = "https://nuetzi-games-express.herokuapp.com/toppsp/";
const TOP_PSVITA_URL = "https://nuetzi-games-express.herokuapp.com/toppsvita/";

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

export function getTopXbox() {
    const response = axios.get(`${TOP_XBOX_URL}`);
    return response;
};

export function getTopXbox360() {
    const response = axios.get(`${TOP_XBOX360_URL}`);
    return response;
};

export function getTopXboxOne() {
    const response = axios.get(`${TOP_XBOXONE_URL}`);
    return response;
};

export function getTopXboxSeriesX() {
    const response = axios.get(`${TOP_XBOXSERIESX_URL}`);
    return response;
};
//////////////////////////////////////////////
export function getTopGenesis() {
    const response = axios.get(`${TOP_GENESIS_URL}`);
    return response;
};

export function getTopSaturn() {
    const response = axios.get(`${TOP_SATURN_URL}`);
    return response;
};

export function getTopDreamcast() {
    const response = axios.get(`${TOP_DREAMCAST_URL}`);
    return response;
};

export function getTopGameGear() {
    const response = axios.get(`${TOP_GAMEGEAR_URL}`);
    return response;
};

export function getTopGameBoy() {
    const response = axios.get(`${TOP_GAMEBOY_URL}`);
    return response;
};

export function getTopGameBoyColor() {
    const response = axios.get(`${TOP_GAMEBOYCOLOR_URL}`);
    return response;
};

export function getTopGameBoyAdvance() {
    const response = axios.get(`${TOP_GAMEBOYADVANCE_URL}`);
    return response;
};

export function getTopNintendoDS() {
    const response = axios.get(`${TOP_NINTENDODS_URL}`);
    return response;
};

export function getTopNintendo3DS() {
    const response = axios.get(`${TOP_3DS_URL}`);
    return response;
};

export function getTopPSP() {
    const response = axios.get(`${TOP_PSP_URL}`);
    return response;
};

export function getTopPSVita() {
    const response = axios.get(`${TOP_PSVITA_URL}`);
    return response;
};

// export function getGame(id) {
//     const response = axios.get(`${TOP_RATED_URL}${id}`);
//     return response;
// };


