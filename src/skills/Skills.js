import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Описание моих навыков находится именно здесь!)'}/>
                    <Skill title={'CSS'} description={'Описание моих навыков находится именно здесь!)'}/>
                    <Skill title={'React'} description={'Описание моих навыков находится именно здесь!)'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills

