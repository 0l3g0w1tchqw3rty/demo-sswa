import profileAPI from "../../api/profileAPI"
import {stopSubmit} from "redux-form"
import {PhotosType, PostType, ProfileType} from "../../Types/Types"

const SET_PHOTO = 'PROFILE-REDUCER/SET-PHOTO'
const ADD_POST = 'PROFILE-REDUCER/ADD-POST'
const SET_PROFILE = 'PROFILE-REDUCER/SET-PROFILE'
const SET_STATUS = 'PROFILE-REDUCER/SET-STATUS'
const IS_FETCHING = 'PROFILE-REDUCER/IS-FETCHING'

export type InitialStateType = typeof initialState
const initialState = {
    profile: null as ProfileType | null,
    posts: [
        {id: 1, post: "unfortunately server's API"},
        {id: 2, post: "doesn't support posts for now"}
    ] as Array<PostType>,
    status: '' as string,
    isFetching: false,
}

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 4, post: action.post}, ...state.posts],
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photo
                } as ProfileType
            }
        default:
            return state
    }
}

export default profileReducer

type ActionTypes = AddPostActionType|SetPhotoActionType|SetProfileActionType|SetStatusActionType|IsFetchingActionType

type AddPostActionType = {
    post: string
    type: typeof ADD_POST
}
export const addPost = (post: string): AddPostActionType => ({type: ADD_POST, post})

type SetPhotoActionType = {
    photo: PhotosType
    type: typeof SET_PHOTO
}
const setPhoto = (photo: PhotosType): SetPhotoActionType => ({type: SET_PHOTO, photo})

type SetProfileActionType = {
    profile: ProfileType
    type: typeof SET_PROFILE
}
const setProfile = (profile: ProfileType): SetProfileActionType => ({type: SET_PROFILE, profile})

type SetStatusActionType = {
    status: string
    type: typeof SET_STATUS
}
const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})

type IsFetchingActionType = {
    fetching: boolean
    type: typeof IS_FETCHING
}
const isFetching = (fetching: boolean): IsFetchingActionType => ({type: IS_FETCHING, fetching})


export const uploadingPhoto = (photo: File) => async (dispatch: any) => {
    dispatch(isFetching(true))
    let response = await profileAPI.updPhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))
    }
    dispatch(isFetching(false))
}

export const savingProfile = (data: ProfileType) => async (dispatch: any) => {
    dispatch(isFetching(true))
    let response = await profileAPI.updProfile(data)
    if (response.data.resultCode === 0) {
        dispatch(setProfile(data))
    }
    dispatch(isFetching(false))
    let message = response.data.messages.length > 0 ? response.data.messages[0] : null
    dispatch(stopSubmit("settings", {_error: message}))
}

export const gettingProfile = (userId: number) => async (dispatch: any) => {
    dispatch(isFetching(true))
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response.data))
    dispatch(isFetching(false))
}

export const gettingStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data)
    )
}

export const settingStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

