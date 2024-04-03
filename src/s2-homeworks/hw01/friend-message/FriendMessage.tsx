import React from 'react'
import s from './FriendMessage.module.css'
import { MessageType } from '../HW1'

// создать тип вместо any и отобразить приходящие данные
// ВСЕ ТОЖЕ САМОЕ, ЧТО И В КОМПОНЕНТЕ Message -ПОЭТОМУ ПОДСКАЗОК МЕНЬШЕ
export type FriendMessagePropsType = {
    friendTime: string
    friendMessageText: string
    avatar: string 
    friendName: string
    message:MessageType
}


const FriendMessage = (props: FriendMessagePropsType ) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={props.avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.friendName}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.friendMessageText}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.friendTime}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage