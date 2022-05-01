import axios from "axios";
const IGDB_URL = process.env.PROXY_URL;

export function getTop50() {
    return axios({
        url: "`${IGDB_URL}games`",
        method: 'POST',
        data: "fields aggregated_rating,cover.url,first_release_date,genres.name,involved_companies.company.name,name,platforms.name,rating,storyline,summary,total_rating,url; where aggregated_rating>90 & aggregated_rating_count>10; sort aggregated_rating desc; limit 50;"
      });
};

export function getPlatforms() {
    return axios({
        url: `${IGDB_URL}platforms/`,
        method: 'POST',
        data: "fields name,platform_family.name,platform_logo,url;"
      });   
};