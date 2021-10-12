import React from "react";
import style from '../common/styles/Block.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={style.bigBlockSkills}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Навыки'}/>
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

