import { readMessage } from "../repository";
import express from "express";
import { Empty, ErrorResponseType, MessageSendType, MessageResponseType, } from "types";
import { Path } from '../../enums/path'
import { Message } from '../../enums/message'

const router = express.Router();

router.post<Empty, MessageResponseType | ErrorResponseType, MessageSendType, Empty>(`${Path.Root}`, async (req, res) => {
    try {

        const message = await readMessage(req.body.name, req.body.id)

        return res.status(200).send({message})

    } catch (error) {
        res.status(500).send({message: Message.Error})
    }
});

module.exports = router
