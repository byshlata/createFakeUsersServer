import { checkNewMessage } from "../repository";
import express from "express";
import { Empty, ErrorResponseType, UserResponseType, UserType } from "types";
import { Path } from "../../enums/path";
import { Message } from "../../enums/message";


const router = express.Router();

router.post<Empty, UserResponseType | ErrorResponseType, UserType, Empty>(`${Path.Root}`, async (req, res) => {
    try {
        const messages = await checkNewMessage(req.body.name)

        return res.status(200).send({...messages})

    } catch (error) {
        return res.status(500).send({message: Message.Error})
    }
});

module.exports = router
