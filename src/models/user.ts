import { MessageType, UserSendType } from "types";
import { model, Schema } from 'mongoose';
import { StatusMessage } from "../enums/statusMessage";


const messageSchema = new Schema<MessageType>({
    to: String,
    from: String,
    avatar: {type: String, required: true, default: ''},
    text: String,
    status: {type: String, required: true, default: StatusMessage.Unread},
    subject: String
}, {timestamps: true})


const userSchema = new Schema<UserSendType>({
    name: String,
    countMessage: {type: Number, required: true, default: 0},
    countReceivedMessage: {type: Number, required: true, default: 0},
    avatar: {type: String, required: true, default: ''},
    messages: [{type: messageSchema, required: true, default: []}]
}, {
    timestamps: true
});


export const User = model<UserSendType>('User', userSchema);

export const Message = model<MessageType>('Message', messageSchema);
