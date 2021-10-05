import axios from "axios";
import { YOUTUBE_URL, ACCESS_KEY } from "../vars";

const youtubeAxios = axios.create({
    baseURL: YOUTUBE_URL,
    params: {
        part: 'snippet',
        key: ACCESS_KEY,
    }
});

export const searchVideo = (query) => {
    return youtubeAxios.get('/search', { params: { q: { query } }});
}

// export const searchVideo = (query) => {
//   return axios.get('https://www.googleapis.com/youtube/v3/search', {
//             params: {
//                 part: 'snippet',
//                 key: 'AIzaSyAqsKK9sh-T0T0ho83R3HSMSObsgzPWVLA',
//                 q: query,
//             },
//         })
//         .then(res => console.log(res))  
// }

