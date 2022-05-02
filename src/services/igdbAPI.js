import axios from "axios";
const IGDB_URL = "https://d3dta3yl9f.execute-api.us-west-2.amazonaws.com/production/v4/";

export function getTopRated() {
    const axios = require('axios');
    let data = 'fields aggregated_rating,cover.url,first_release_date,genres.name,involved_companies.company.name,name,platforms.name,rating,storyline,summary,total_rating,url; where aggregated_rating>90 & aggregated_rating_count>10; sort aggregated_rating desc; limit 50;';

    let config = {
        method: 'post',
        url: 'https://d3dta3yl9f.execute-api.us-west-2.amazonaws.com/production/v4/games',
        headers: { 
            'Content-Type': 'text/plain'
        },
        data : data
    };

    axios(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
};

// export function getTopRated() {
//     let data = "fields aggregated_rating,cover.url,first_release_date,genres.name,involved_companies.company.name,name,platforms.name,rating,storyline,summary,total_rating,url; where aggregated_rating>90 & aggregated_rating_count>10; sort aggregated_rating desc; limit 50;";

//     let config = {
//         method: "post",
//         url: `${IGDB_URL}games`,
//         headers: { 
//             "Content-Type": "text/plain"
//         },
//         data: data
//     };

//     const response = axios(config);
//     return response;
// };

// export function getPlatforms() {
//     return axios({
//         url: `${IGDB_URL}platforms/`,
//         method: "POST",
//         data: "fields name,platform_family.name,platform_logo,url;"
//       });   
// };