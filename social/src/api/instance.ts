import axios from "axios"

const instance = axios.create(
    {
        withCredentials: true,
        headers: {"API-KEY": "a524d3e2-1f46-4784-8af9-d0b317315baa"},
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
)
export default instance