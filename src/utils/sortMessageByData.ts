import { MessageType } from "types";

// @ts-ignore
export const sortMessageByData = (messages: MessageType[]) => messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))