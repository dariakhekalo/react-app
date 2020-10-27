const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: "Dasha"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Valera"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your work"},
        {id: 3, message: "Yo"},

    ],
    newMessageText: "",
}
export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.bodyMessage
            };



        case SEND_MESSAGE:
            let body = state.newMessageText;

           return  {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, {id: 4, message: body} ]
            }


        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY, bodyMessage: body
    }
}
export default dialogsReducer;