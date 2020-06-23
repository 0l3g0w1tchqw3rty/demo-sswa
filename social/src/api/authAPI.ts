import instance from "./instance"

export enum ResultCodes {
    Success,
    Error
}

export enum ResultCodeForCaptcha {
    Captcha = 10
}

type MeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: Array<string>
}
type LoginType = {
    resultCode: ResultCodes | ResultCodeForCaptcha
    messages: Array<string>
    data: {
        userId: number
    }
}
type LogoutType = {
    resultCode: ResultCodes
    messages: Array<string>
    data: object
}
type CaptchaType = {
    url: string
}

const authAPI = {
    authMe() {
        return instance.get<MeType>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string) {
        return instance.post<LoginType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<LogoutType>(`auth/login`).then(response => response.data)
    },
    getCaptchaUrl() {
        return instance.get<CaptchaType>(`security/get-captcha-url`)
            .then(response => response.data.url)
    }
}
export default authAPI

