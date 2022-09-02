import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        api_key: '7f18c5807d53ac8a3bfdf93f9ab71026',
        language: 'ko-KR',
    }
})


export default instance;
