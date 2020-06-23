import React from "react";
import m from "./messages.module.css";
import UsersList from "./UsersList/UsersList";
import MessagesWindow from "./MessagesWindow/MessagesWindow";


const Messages = (props) => {
    return (
        <main className={m.main}>
            <div className={m.main__container}>
                <UsersList users={props.users}/>
                <MessagesWindow
                    sendMessage={props.sendMessage}
                    message={props.message}/>
            </div>
        </main>
    )
}
export default Messages;
