import React from 'react'
import f from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={f.footer}>
            <div className={f.footer__container}>
                <div className={f.footer__text}>
                    <p>"SSWA" contact mail: <a href="mailto:0l3g0w1tchqw3rty@gmail.com"> 0l3g0w1tchqw3rty@gmail.com</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
