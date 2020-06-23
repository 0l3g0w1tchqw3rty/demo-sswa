import p from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
            <article className={p.post}>
                {props.post}
            </article>
    )
}
export default Post;