import React from "react";
import m from "./MessagesWindow.module.css";
import LeftMessage from "./LeftMessage/LeftMessage";
import RightMessage from "./RightMessage/RightMessage";
import MessagesForm from "./messagesForm/messagesForm";



const MessagesWindow = (props) => {

    let leftMessageData = props.message.leftMessage.map(i => <LeftMessage key={i.id} id={i.id} message={i.message}/>);
    let rightMessageData = props.message.rightMessage.map(i => <RightMessage key={i.id} id={i.id} message={i.message}/>);

    const handleSubmit = (formData) => {
        props.sendMessage(formData.message);
    }


    return (
        <section className={m.main__dialogs}>
            <div className={m.dialogs__window}>
                {leftMessageData}
                {rightMessageData}
            </div>
            <div className={m.dialogs__ui}>
                <MessagesForm onSubmit={handleSubmit}/>
            </div>
        </section>
    )
}

    export default MessagesWindow;
