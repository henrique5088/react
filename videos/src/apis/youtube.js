import axios from 'axios'

const KEY = "AIzaSyDa-k7eRbbVqIGNooPt1h0IM6FgLghQIWg";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})
