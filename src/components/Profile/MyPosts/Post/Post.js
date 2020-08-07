import React from "react";
import './Post.module.css';
import classes from './Post.module.css'


const Post = (props) => {
    return (

                <div className={classes.item}>
                    <img src='https://cdn.vox-cdn.com/thumbor/48ExsWf9xBecr-aK18m01PRLVio=/95x601:1280x1460/1400x933/filters:focal(538x858:742x1062):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png'/>
                    {props.message}
                    <div>
                    <span> like  </span> {props.like}
                </div>
                </div>

            )
            }

 export default Post;
