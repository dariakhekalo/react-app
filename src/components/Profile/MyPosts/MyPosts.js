import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={classes.posts}>
               < Post message='Hi, how are you?' like="15"/>
               < Post message="It`s my first post" like="20"/>
               < Post/>
                </div>
            </div>
            )
            }

 export default MyPosts;
