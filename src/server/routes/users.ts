import express from "express";
import {
    Empty,
    ErrorResponseType,
    UserResponseType,
    UserSendType,
} from "types";
import { Message } from '../../enums/message'
import { Path } from '../../enums/path'
import { generateUsers } from "../../utils/generateUsers/generateUsers";

const router = express.Router();

router.post<Empty, UserResponseType | ErrorResponseType, UserSendType, Empty>(`${Path.Root}`, async (req, res) => {
    try {
        const language = req.body.language;
        const amount = req.body.amount;
        const seed = req.body.seed;
        const page = req.body.page;
        const users = generateUsers(language, amount, seed, page)
        return res.status(200).send({users: users})
    } catch (error) {
        return res.status(500).send({message: Message.Error})
    }
});

module.exports = router
