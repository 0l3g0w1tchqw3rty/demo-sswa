import React from "react";
import t from "./LoginText.module.css";


const LoginText = () => {
    return(
        <section className={t.main__text}>
            <article className={t.text}>
                <h2>Welcome to "SSWA"!</h2>
                <p>To look around plz use:</p>
                <ul>
                    <li>Login: "smfqwerty@gmail.com"</li>
                    <li>Pass: "123qweasdzxc"</li>
                </ul>
                thnx ;)
            </article>
        </section>
    )
}
export default LoginText;