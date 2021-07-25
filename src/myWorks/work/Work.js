import React from "react";
import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <span className={style.block}>Смотреть</span>
            </div>
            <div className={style.text}>
                <span className={style.title}>{props.title}</span>
                <span className={style.title}>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;