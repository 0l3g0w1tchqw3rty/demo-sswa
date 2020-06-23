import axios from "axios"

const instance = axios.create(
    {
        withCredentials: true,
        headers: {"API-KEY": "a37eaedf-1b03-41dc-a8ee-8c63232a865b"},
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
)
export default instance