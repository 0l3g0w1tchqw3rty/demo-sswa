import { StateType } from "../store"

export const getId = (state:StateType) => {
    return state.auth.data.id
}
export const getStatus = (state:StateType) => {
    return state.profilePage.status
}
export const getProfile = (state:StateType) => {
    return state.profilePage.profile
}
export const getPosts = (state:StateType) => {
    return state.profilePage.posts
}
export const getIsFetching = (state:StateType) => {
    return state.profilePage.isFetching
}