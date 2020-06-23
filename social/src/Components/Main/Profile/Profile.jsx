import React from "react";
import p from "./Profile.module.css"
import Info from "./Info/Info";
import Contacts from "./Contacts/Contacts";
import Posts from "./Posts/Posts";
import PostsForm from "./PostsForm/PostsForm";
import Preloader from "../../Common/Preloader/Preloader";
import {reduxForm} from "redux-form";


const Profile = ({addPost, owner, settingStatus, profile, status, posts}) => {

    const handleSubmit = (post) => {
        addPost(post.post);
    }

    if (!profile) {
        return (
            <Preloader/>
        )
    }

    return (

        <main className={p.main}>
            <div className={p.main__container}>

                <Info
                    job={profile.lookingForAJob}
                    jobStatus={profile.lookingForAJobDescription}
                    owner={owner}
                    settingStatus={settingStatus}
                    name={profile.fullName}
                    photo={profile.photos.small}
                    status={status}
                    id={profile.userId}/>

                <Contacts contacts={profile.contacts}/>
                <section className={p.main__post}>
                    <PostsReduxForm onSubmit={handleSubmit}/>
                </section>
                <Posts posts={posts}/>
            </div>
        </main>
    )
}
const PostsReduxForm = reduxForm({form: "posts"})(PostsForm)
export default Profile;
