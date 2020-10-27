import classes from "../../../Profile/MyPosts/MyPosts.module.css";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogsReducer";


const MyMessage = (props) => {

let newMessageBody =props.newMessageText

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.postsBlock}>

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
            )
            }
export default MyMessage;