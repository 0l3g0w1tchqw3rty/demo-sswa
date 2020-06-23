import instance from "./instance"

const profileAPI = {

    getProfile(userId:number) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId:number) {
        return instance.get(`profile/status/${userId}`)

    },

    updStatus(s:string) {
        return instance.put(`profile/status`, {status: s})
    },

    updPhoto(photo:File) {
        let formData = new FormData();
        formData.append("image", photo)

        return instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },

    updProfile(data:object) {
        return instance.put(`profile`, data)
    }

}
export default profileAPI