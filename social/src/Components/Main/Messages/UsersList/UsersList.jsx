import React from "react";
import m from "./UsersList.module.css";
import User from "./Users/User";



const UsersList = (props) => {

    let usersData = props.users.map(i => <User key={i.id} name={i.name} id={i.id}/>)

    return (
        <section className={m.main__users}>
            <div className={m.users__container}>
                {usersData}
            </div>
        </section>
    )
}
export default UsersList;
