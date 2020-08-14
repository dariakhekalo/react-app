import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.postData.map(p =>  < Post message={p.massage} like={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
         <h3>   my post </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={classes.posts}>
                {postsElements}
                  < Post/>
            </div>
        </div>
    )
}

export default MyPosts;
