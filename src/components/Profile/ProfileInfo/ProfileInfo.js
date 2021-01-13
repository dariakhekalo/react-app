import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.fullName} </div>
                <div> My Contacts:
                    {props.profile.contacts.vk}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}

                </div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;