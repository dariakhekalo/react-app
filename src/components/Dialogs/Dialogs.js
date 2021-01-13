import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageText;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)

    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements} </div>
                <div/>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="enter your message"/>

            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;