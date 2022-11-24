import { MessageType, UserResponseType } from "types";
import { Message, User } from "../models/user";
import { throwError } from "../utils/throwError"
import { createAvatars } from '../utils/createAvatarBase64'
import { StatusMessage } from "../enums/statusMessage";
import { sortMessageByData } from "../utils/sortMessageByData";


export const findAllUser = async (): Promise<string[]> => {
    const user = await User.find()
    return await user.map(user => user.name)
}

export const readMessage = async (name: string, id: string): Promise<MessageType> => {
    try {
        const user = await User.findOne({ name });
        let messageRead;

        user.messages.forEach(message => {
            if (message._id.toString() === id) {
                message.status = StatusMessage.Read
                messageRead = message
            }
        })
        await user.save()

        return Promise.resolve(messageRead)
    } catch (error) {
        throwError()
    }
}

export const checkNewMessage = async (name: string): Promise<UserResponseType> => {

    const user = await User.findOne({ name: name })
    const users = await findAllUser()

    if (user.countReceivedMessage) {
        const newMessage = user.messages.slice(-user.countReceivedMessage)
        const countNewMessage = user.countReceivedMessage
        user.countReceivedMessage = 0;
        user.countMessage = newMessage.length;
        await user.save()

        return {
            messages: newMessage,
            counterNewMessage: countNewMessage,
            users,
            avatar: user.avatar
        }
    }

    return {
        messages: [],
        counterNewMessage: 0,
        users,
        avatar: user.avatar
    }
}


export const loginUser = async (name: string): Promise<UserResponseType> => {
    try {

        const user = await User.findOne({ name: name });
        const users = await findAllUser()

        if (user) {
            const newMessage = user.messages.slice(-user.countReceivedMessage)
            const countNewMessage = user.countReceivedMessage
            user.countReceivedMessage = 0;
            user.countMessage = newMessage.length;
            await user.save()

            return Promise.resolve({
                messages: sortMessageByData(user.messages),
                counterNewMessage: countNewMessage,
                avatar: user.avatar,
                users: [],
            })
        } else {
           const user = await new User({ name });
            user.avatar = createAvatars()
            await user.save()

            return Promise.resolve({
                messages: [],
                counterNewMessage: 0,
                users:[],
                avatar: '000000'
            })
        }
    } catch (error) {
        throwError()
    }
}

export const getMessage = async (payload: MessageType): Promise<void> => {
    const message = await new Message(
        {
            to: payload.to,
            from: payload.from,
            subject: payload.subject,
            text: payload.text
        })
    const user = await User.findOne({ name: payload.from })
    message.avatar = user.avatar
    await User.updateOne({ name: payload.to }, { $push: { messages: message } }, { upsert: true })
    await User.updateOne({ name: payload.to }, { $inc: { countReceivedMessage: 1 } }, { upsert: true })
    await message.save()
}




