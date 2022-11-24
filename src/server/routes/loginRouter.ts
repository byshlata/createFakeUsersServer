import { loginUser } from "../repository";
import express from "express";
import { Empty, ErrorResponseType, UserResponseType, UserType } from "types";
import { Message } from '../../enums/message'
import { Path } from '../../enums/path'

const router = express.Router();

router.post<Empty, UserResponseType | ErrorResponseType, UserType, Empty>(`${Path.Root}`, async (req, res) => {
    try {
        const name = req.body.name;

        const messages = await loginUser(name)
        return res.status(200).send({...messages})
        //return res.status(200).send({...messages})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: Message.Error})
    }
});

module.exports = router
