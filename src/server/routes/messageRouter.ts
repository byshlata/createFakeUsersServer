import { getMessage } from "../repository";
import express from "express";
import { Empty, ErrorResponseType, MessageType, UserResponseType, } from "types";
import { Path } from '../../enums/path'
import { Message } from '../../enums/message'

const router = express.Router();

router.post<Empty, UserResponseType | ErrorResponseType, MessageType, Empty>(`${Path.Root}`, async (req, res) => {
    try {
        await getMessage(req.body)

        return res.status(200).send({message: Message.Success})

    } catch (error) {
        res.status(500).send({message: Message.Error})
    }
});

module.exports = router
