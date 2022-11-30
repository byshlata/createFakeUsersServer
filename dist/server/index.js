"use strict";
exports.__esModule = true;
var path_1 = require("../enums/path");
var express = require('express');
var cors = require('cors');
var users = require('./routes/users');
var seed = require('./routes/seed');
var app = express();
process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p);
});
var corsOptions = {
    origin: ["https://byshlata.github.io", "http://localhost:3000"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("".concat(path_1.Path.Users), users);
app.use("".concat(path_1.Path.Seed), seed);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("server is listening on port ".concat(port));
});
