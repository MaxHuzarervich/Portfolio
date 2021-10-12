import React from 'react';
import style from './MyWorks.module.scss'
import Work from './work/Work';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import todo from './../assets/image/todo.jpg'
import social from './../assets/image/socialNetwork.jpg'

function MyWorks() {
    const socialNetwork = {
        backgroundImage: `url(${social})`,
    }
    const todolist = {
        backgroundImage: `url(${todo})`,
    }
    return (
        <div className={style.bigBlockWorks}>
            <div className={`${styleContainer.container} ${style.containerWorks}`}>
                <Title text={'Проекты'}/>
                <div className={style.littleBlockWorks}>
                    <Work style={socialNetwork}
                          title={'Social Network'}
                          description={' Описание Описание Описание Описание' +
                          ' Описание Описание Описание Описание Описание '}/>
                    <Work style={todolist}
                          title={'Todo list'}
                          description={'Описание Описание Описание Описание Описание' +
                          ' Описание Описание Описание Описание Описание Описание Описание '}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;