import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3' ,
    headers: {
    'content-type': 'application/json;charset-utf-8' ,
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjI0MDM2ZDA0MzFhNGRiYzI5MjZmZWRlNzc2OWQwOCIsInN1YiI6IjVmNjkyODZkY2VlMmY2MDAzNTJlNWEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDshMSsX5ivdLyw3FXzdw76UgZicdfV_cJTjvDvJSVM'

    }
})

export default apiFilmes
