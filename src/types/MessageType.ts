import { StatusMessageType } from "types";

export type MessageType = {
    _id?: string;
    to: string;
    from: string;
    avatar: string;
    createdAt?: string;
    updatedAt?: string;
    text: string;
    subject: string;
    image: string;
    status?: StatusMessageType;
    _v?: number;
}
