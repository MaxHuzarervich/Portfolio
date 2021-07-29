import React from "react";
import style from './Skill.module.css'

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <div>
                <h3>{props.title}</h3>
                <span className={style.span}>
                {props.description}
            </span>
            </div>
        </div>
    );
}

export default Skill

