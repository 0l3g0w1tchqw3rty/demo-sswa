//profile
export type PhotosType = {
    small: string | null
    large: string | null
}
export type PostType = {
    id: number
    post: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
//users
export type UsersType = {
    name: string
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}
//common
