import express from "express";

import {
    Empty,
    ErrorResponseType,
    UserResponseType, UserSendType,
} from "types";
import { Path } from '../../enums/path'
import { Message } from '../../enums/message'
import { generateUsers } from "../../utils/generateUsers/generateUsers";


const router = express.Router();

router.post<Empty, UserResponseType | ErrorResponseType, UserSendType, Empty>(`${Path.Root}`, async (req, res) => {
    try {
        const seed = req.body.seed
        const amount = req.body.amount
        const language = req.body.language
        const page = req.body.page
        const users = generateUsers(language, amount, seed, page)

        return res.status(200).send({users: users})

    } catch (error) {
        res.status(500).send({message: Message.Error})
    }
});

module.exports = router
