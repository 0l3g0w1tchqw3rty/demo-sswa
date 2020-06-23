import usersAPI from "../../api/usersAPI"
import followAPI from "../../api/followAPI"
import {UsersType} from "../../Types/Types"
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {StateType} from "../store";

const FOLLOW_USER = 'USERS-REDUCER/FOLLOW-USER'
const UNFOLLOW_USER = 'USERS-REDUCER/UNFOLLOW-USER'
const SET_USERS = 'USERS-REDUCER/SET-USERS'
const SET_CURRENT_PAGE = 'USERS-REDUCER/CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'USERS-REDUCER/SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'USERS-REDUCER/TOGGLE-IS-FETCHING'
const FOLLOWING_IN_PROGRESS = 'USERS-REDUCER/FOLLOWING-IN-PROGRESS'

let initialState = {
    users: [] as Array<UsersType>, //users array
    pageSize: 4, //number of users on page
    totalUsers: 0, //default users count
    currentPage: 1, //setting current page
    isFetching: false, //getting data
    followingProgress: [] as Array<number> // array of users id while following
};
export type InitialStateType = typeof initialState
type ActionTypes = SetUsersActionType | FollowActionType | UnfollowActionType | SetCurrentPageActionType
    | SetUsersTotalCountActionType | ToggleFollowingActionType | ToggleIsFetchingActionType

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USERS: //setting users on users page
            return {
                ...state,
                users: action.users
            }
        case SET_USERS_TOTAL_COUNT: //how many users are currently registered on server
            return {
                ...state,
                totalUsers: action.count
            }
        case SET_CURRENT_PAGE: //setting page of users
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING: //fetching of users data
            return {
                ...state,
                isFetching: action.fetching
            }
        case FOLLOW_USER: //start following user
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {
                                ...u,
                                followed: true
                            }
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW_USER: //stop following user
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u
                    }
                )
            }
        case FOLLOWING_IN_PROGRESS: //disables button follow/unfollow while getting request from server
            return {
                ...state,
                followingProgress:
                    action.progress
                        ? [...state.followingProgress, action.id]
                        : state.followingProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}
export default usersReducer

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users})

type FollowActionType = {
    id: number
    type: typeof FOLLOW_USER
}
const follow = (id: number): FollowActionType => ({type: FOLLOW_USER, id})

type UnfollowActionType = {
    id: number
    type: typeof UNFOLLOW_USER
}
const unfollow = (id: number): UnfollowActionType => ({type: UNFOLLOW_USER, id})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
const setCurrentPage = (page: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, page})

type SetUsersTotalCountActionType = {
    type: typeof SET_USERS_TOTAL_COUNT
    count: number
}
const setUsersTotalCount = (count: number): SetUsersTotalCountActionType => ({type: SET_USERS_TOTAL_COUNT, count})

type ToggleFollowingActionType = {
    type: typeof FOLLOWING_IN_PROGRESS
    progress: boolean
    id: number
}
const toggleFollowing = (progress: boolean, id: number): ToggleFollowingActionType => ({
    type: FOLLOWING_IN_PROGRESS, progress, id
})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    fetching: boolean
}
const toggleIsFetching = (fetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, fetching})

/************************************************
*   ThunkAction<R, S, E, A extends Action> = (  *
*  dispatch: ThunkDispatch<S, E, A>,            *
*  getState: () => S,                           *
*  extraArgument: E                             *
*   ) => R;                                     *
*************************************************/
type ThunkActionType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>
export const gettingUsers = (page: number, pageSize: number)
    : ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let response = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setUsersTotalCount(response.data.totalCount))
    }
}

const _toggleFollow = async (dispatch: Dispatch<ActionTypes>,
                             id: number,
                             APIMethod: any,
                             action: (id: number) => FollowActionType | UnfollowActionType) => {
    dispatch(toggleFollowing(true, id))
    let response = await APIMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(action(id))
    }
    dispatch(toggleFollowing(false, id))
}
export const unfollowing = (id: number): ThunkActionType => async (dispatch) => {
    await _toggleFollow(dispatch, id, followAPI.unfollow, unfollow)
}
export const following = (id: number): ThunkActionType => async (dispatch: any) => {
    await _toggleFollow(dispatch, id, followAPI.follow, follow)
}