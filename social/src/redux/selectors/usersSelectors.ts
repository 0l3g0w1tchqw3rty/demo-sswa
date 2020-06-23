import {StateType} from "../store";

export const getCurrentPage = (state:StateType) => {
    return state.usersPage.currentPage
}
export const getPageSize = (state:StateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsers = (state:StateType) => {
    return state.usersPage.totalUsers
}
export const getUsers = (state:StateType) => {
    return state.usersPage.users
}
export const getIsFetching = (state:StateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state:StateType) => {
    return state.usersPage.followingProgress
}