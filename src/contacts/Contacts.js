import React from "react";
import style from './Contacts.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <div className={style.contactsTitle}><h2>Контакты</h2></div>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textArea}/>
                    <button className={style.button}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;