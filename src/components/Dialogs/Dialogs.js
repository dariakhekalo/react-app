import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MyPosts from "../Profile/MyPosts/MyPosts";
import MyMessage from "./Message/MyMessage/MyMessage";


const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements} </div>
                <div/>
                <div>
                    <div>
                    <textarea placeholder="enter your message" onChange={onMessageChange}
                              value={newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;