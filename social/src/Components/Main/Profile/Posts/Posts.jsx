import React from "react";
import p from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = React.memo(props => {

    let postData = props.posts.map(i => <Post key={i.id} id={i.id} post={i.post}/>)

    return (
        <section className={p.main__posts}>
            {postData}
        </section>
    )
})

export default Posts;
