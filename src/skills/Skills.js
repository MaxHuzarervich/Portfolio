import React from "react";
import style from './../common/styles/Block.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";


function Skills() {
    return (
        <div className={style.bigBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.littleBlock}>
                    <Skill title={'JS'} description={' Описание Описание Описание    Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'}/>
                    <Skill title={'CSS'} description={'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'}/>
                    <Skill title={'React'} description={' Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание моих навыков находится именно здесь!)'}/>
                    <Skill title={'TypeScript'} description={'Описание моих навыков находится именно здесь!)'}/>
                    <Skill title={'Redux'} description={'Описание моих навыков находится именно здесь!)'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills

