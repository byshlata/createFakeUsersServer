import { connect } from 'mongoose';
import { Path } from "../enums/path";

const express = require('express')
const cors = require('cors')
const check = require('./routes/checkRouter')
const login = require('./routes/loginRouter')
const getMessage = require('./routes/messageRouter')
const readMessage = require('./routes/readMessageRouter')

async function run() {
    await connect('mongodb+srv://byshlata:wwwwww@userbase.zbjoeya.mongodb.net/userMessages?retryWrites=true&w=majority');
}

run().catch(err => console.log(err));

const app = express();


process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
})

/*const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}*/

app.use(cors())

app.use(express.json())

app.use(`${Path.Check}`, check)
app.use(`${Path.Login}`, login)
app.use(`${Path.GetMessage}`, getMessage)
app.use(`${Path.ReadMessage}`, readMessage)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

