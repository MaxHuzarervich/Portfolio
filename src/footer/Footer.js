import React from "react";
import style from "./Footer.module.css"


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Максим Гузаревич</h2>
                <div className={style.socials}>
                    <div className={style.logo1}></div>
                    <div className={style.logo2}></div>
                    <div className={style.logo1}></div>
                </div>
                <h3 className={style.title}>© 2021 Все права защищены</h3>
            </div>
        </div>
    )
}

export default Footer;