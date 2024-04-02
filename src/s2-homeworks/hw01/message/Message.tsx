import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1'
import { time } from 'console'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType,
    time:string
    
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                {/*создаёт студент*/}
                <img src="./../avatar.png"
                    id={'hw1-avatar-' + props.message.id}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {s.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {s.message}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {s.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message