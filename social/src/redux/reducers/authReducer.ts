import authAPI, {ResultCodes, ResultCodeForCaptcha} from "../../api/authAPI"
import {stopSubmit} from "redux-form"

const GET_CAPTCHA_URL = 'AUTH-REDUCER/GET-CAPTCHA-URL'
const SET_USER_DATA = 'AUTH-REDUCER/SET-USER-DATA'

export type InitialStateType = typeof initialState
let initialState = {
    data: {
        id: null as number | null,
        login: null as string | null,
        email: null as string | null
    },
    capUrl: null as string | null,
    isAuth: false,
    isFetching: false
}


const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL:
            return {
                ...state,
                capUrl: action.url
            }
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export default authReducer

type ActionTypes = SetUserDataType | SetCaptchaType

type SetUserDataPayloadType = {
    id: number | null
    email: string | null
    login: string | null
}
type SetUserDataType = {
    type: typeof SET_USER_DATA
    isAuth: boolean
    payload: SetUserDataPayloadType
}
const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType =>
    ({
        type: SET_USER_DATA,
        isAuth: isAuth,
        payload: {id, email, login}
    })


type SetCaptchaType = {
    type: typeof GET_CAPTCHA_URL
    url: string
}
const setCaptcha = (url: string): SetCaptchaType => ({type: GET_CAPTCHA_URL, url})
const getCaptcha = () => async (dispatch: any) => {
    const url = await authAPI.getCaptchaUrl()
    dispatch(setCaptcha(url))
}

export const authorization = () => async (dispatch: any) => {
    const data = await authAPI.authMe()
    if (data.resultCode === ResultCodes.Success) {
        let {id, email, login} = data.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: any) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(authorization())
        } else {
            if (data.resultCode === ResultCodeForCaptcha.Captcha) {
                dispatch(getCaptcha())
            }
            const message = data.messages.length > 0 ? data.messages[0] : "something gone wrong"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success) {
        dispatch(setUserData(null, null, null, false))
    }
}