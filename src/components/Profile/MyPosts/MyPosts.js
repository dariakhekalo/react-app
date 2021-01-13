import React from "react";
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/Forms";




const MyPosts = (props) => {

    let postsElements = props.postData.map(p => < Post message={p.massage} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={classes.postsBlock}>
            <h3> my post </h3>
            <div>

                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
                < Post/>
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
                    <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                    validate={[required, maxLength10]}/>
        </div>
        <div>
            <button >Add post</button>
        </div>

    </form>
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);
export default MyPosts;
