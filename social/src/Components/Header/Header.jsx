import React from "react";
import logo from '../../assets/Header/logo.svg'
import login from '../../assets/Header/login.svg'
import h from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={h.header}>
            <div className={h.header__container}>
                <img src={logo} alt="Something gone wrong"/>
                <div className={h.logo__text}>
                    <h1>SIMPLE SOCIAL WEB APP</h1>
                </div>


                    {!props.isAuth  ?
                        <NavLink to={'/login'}> <button className={h.login__button}><img src={login} alt="Something gone wrong"/>'LOGIN'</button></NavLink>
                        :
                        <NavLink className={h.active} to={'/profile'}><div className={h.login__text}>{props.login}</div> <button className={h.logout__button} onClick={()=>props.logout()}>LOGOUT</button></NavLink>
                        }



            </div>
        </header>
    )
}
export default Header;