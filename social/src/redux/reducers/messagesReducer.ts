const ADD_MESSAGE = 'MESSAGES-REDUCER/ADD-MESSAGE'

type UsersType ={
    name: string
    id: number
}
type MessageType ={
    id: number
    message: string
}

let initialState = {
    users: [
        {name: "User 1", id: 1},
        {name: "User 2", id: 2},
        {name: "User 3", id: 3},
        {name: "User 4", id: 4}
    ]as Array<UsersType>  ,
    message: {
        leftMessage: [
            {id: 0, message: "unfortunately server's API"}
        ] as Array<MessageType>,
        rightMessage: [
            {id: 0, message: "doesn't support messages for now"}
        ] as Array<MessageType>
    }
}
export type InitialStateType = typeof initialState


const messagesReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: {
                    ...state.message,
                    leftMessage: [...state.message.leftMessage, {id: 4, message: action.message}]
                }
            }

        default:
            return state
    }
}
export default messagesReducer

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    message: string
}
export const addMessage = (message: string): AddMessageActionType => ({type: ADD_MESSAGE, message})
