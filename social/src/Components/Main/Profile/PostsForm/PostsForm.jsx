import React from "react"
import u from "./PostsForm.module.css"
import {Field} from "redux-form"
import {TextArea} from "../../../Common/Form/Form"

const PostsForm = (props) => {

    return (
        <form className={u.post__ui} onSubmit={props.handleSubmit}>
            <Field name="post" type="text" component={TextArea} placeholder="Make your's post..."/>
            <div className={u.button__container}>
                <button type="submit" className={u.send__button}>Send</button>
                <button type="button" className={u.clear__button}>Clear</button>
            </div>
        </form>

    )
}
export default PostsForm;
