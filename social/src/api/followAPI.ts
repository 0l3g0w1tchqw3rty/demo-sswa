import instance from "./instance"

const followAPI = {
    follow(id:number) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id:number) {
        return instance.delete(`follow/${id}`)
    }
}
export default followAPI