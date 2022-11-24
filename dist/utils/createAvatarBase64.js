"use strict";
exports.__esModule = true;
exports.createAvatars = void 0;
var fs = require('fs');
var createAvatars = function () {
    var fileNames = fs.readdirSync('dist/data/avatar');
    var pathRandomFile = fileNames[Math.floor(Math.random() * fileNames.length)];
    return fs.readFileSync("dist/data/avatar/".concat(pathRandomFile)).toString('base64');
};
exports.createAvatars = createAvatars;
