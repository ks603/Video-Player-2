import axios from 'axios'

const KEY = 'AIzaSyAO4P9rKeTR53izZauG3Wqh3QyKPqKJT8w'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})

