import {authorization} from "./authReducer"

const INITIALIZE = 'APP-REDUCER/INITIALIZE'

export type InitialStateType = typeof initialState
let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case INITIALIZE :
            return {
                ...state,
                initialize: true
            }
        default:
            return state
    }

}
export default appReducer;

type ActionType = InitializeActionType

type InitializeActionType = {
    type: typeof INITIALIZE
}
const initialize = (): InitializeActionType => ({type: INITIALIZE})

export const initialisation = () => (dispatch: any) => {
    const promise = dispatch(authorization())
    Promise.all([promise])
        .then(
            () => {
                dispatch(initialize())
            }
        )
}
