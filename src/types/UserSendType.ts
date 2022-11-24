import {MessageType} from "types/MessageType";

export type UserSendType = {
    _id: string,
    name: string,
    avatar: string,
    countMessage: number,
    countReceivedMessage: number,
    messages: MessageType[]
    _v: number
}
