import { Path } from "../enums/path";

const express = require('express')
const cors = require('cors')
const users = require('./routes/users')
const seed = require('./routes/seed')


const app = express();


process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
})

const corsOptions = {
    origin: ["https://byshlata.github.io", "http://localhost:3000"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}

app.use(cors(corsOptions))

app.use(express.json())


app.use(`${Path.Users}`, users)
app.use(`${Path.Seed}`, seed)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

