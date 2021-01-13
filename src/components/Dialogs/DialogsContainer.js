import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));

        }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps ),
    withAuthRedirect
)(Dialogs)