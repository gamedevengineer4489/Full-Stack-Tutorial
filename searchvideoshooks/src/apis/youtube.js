import axios from 'axios';

const KEY = 'AIzaSyALT_mCUIJU5U78p4eyevVGcbTHLIqcCHg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
