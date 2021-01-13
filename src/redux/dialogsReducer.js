const SEND_MESSAGE = 'SEND-MESSAGE'

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

}
 const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return  {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: body} ]
            }


        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;