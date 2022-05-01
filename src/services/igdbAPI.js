import axios from "axios";
const API_URL = "https://api.igdb.com/v4/";
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export function getToken() {
    axios({
        url: `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
        method: "POST",
    })
        .then(response => {
            console.log(response.data);  // Response should be a JSON object where response.access_token should be the authToken needed to access API
        })
        .catch(err => {
            console.error(err);
        });
};

export function getTop50() {
    axios({
        url: `${API_URL}games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': `${CLIENT_ID}`,
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
        data: "fields aggregated_rating,cover.url,first_release_date,genres.name,involved_companies.company.name,name,platforms.name,rating,storyline,summary,total_rating,url; where aggregated_rating>90 & aggregated_rating_count>10; sort aggregated_rating desc; limit 50;"
      })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        });
};

export function getPlatforms() {
    axios({
        url: `${API_URL}platforms`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': `${CLIENT_ID}`,
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
        data: "fields name,platform_family.name,platform_logo,url;"
      })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        });    
}