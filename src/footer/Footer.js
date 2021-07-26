import React from "react";
import style from "./Footer.module.css"


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.title}>Максим Гузаревич</div>
                <div className={style.socials}>
                    <div className={style.logo1}></div>
                    <div className={style.logo2}></div>
                    <div className={style.logo1}></div>
                    <div className={style.logo2}></div>
                    <div className={style.logo1}></div>
                    <div className={style.logo2}></div>
                </div>
                <div className={style.title}>© 2021 Все права защищены</div>
            </div>
        </div>
    )
}

export default Footer;