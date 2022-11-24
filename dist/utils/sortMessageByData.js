"use strict";
exports.__esModule = true;
exports.sortMessageByData = void 0;
// @ts-ignore
var sortMessageByData = function (messages) { return messages.sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); }); };
exports.sortMessageByData = sortMessageByData;
