import axios from "axios";

// export function getTopRated() {
//     const axios = require('axios');
//     let data = 'fields aggregated_rating,cover.url,first_release_date,genres.name,involved_companies.company.name,name,platforms.name,rating,storyline,summary,total_rating,url; where total_rating>85 & platforms=(19); sort total_rating desc; limit 50;';

//     let config = {
//         method: 'post',
//         url: '{AWS_URL}/games',
//         headers: { 
//             'Content-Type': 'text/plain'
//         },
//         data : data
//     };

//     axios(config)
//     .then((response) => {
//         return(response.data);
//     })
//     .catch((error) => {
//     console.log(error);
//     });
// };


// export function getPlatforms() {
//     return axios({
//         url: `${IGDB_URL}platforms/`,
//         method: "POST",
//         data: "fields name,platform_family.name,platform_logo,url;"
//       });   
// };