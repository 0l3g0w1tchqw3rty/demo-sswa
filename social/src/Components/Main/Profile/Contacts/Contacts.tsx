import React, {FC} from "react";
import c from "./Contacts.module.css"
import VK from "./Social/VK";
import Facebook from "./Social/Facebook";
import Instagram from "./Social/Instagram";
import YouTube from "./Social/YouTube";
import GitHub from "./Social/GitHub";
import Twitter from "./Social/Twitter";
import {ContactsType} from "../../../../Types/Types";

type PropsType = {
   contacts: ContactsType
}

const Contacts: FC<PropsType> = ({contacts}) => {
    return (
        <section className={c.main__contacts}>
            <div className={c.contacts__text}>
                <h2>Contacts:</h2>
            </div>
            <VK vk={contacts.vk}/>
            <Facebook fb={contacts.facebook}/>
            <Instagram inst={contacts.instagram}/>
            <YouTube yt={contacts.youtube}/>
            <GitHub gh={contacts.github}/>
            <Twitter tweet={contacts.twitter}/>
        </section>

    )
}
export default Contacts