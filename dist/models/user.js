"use strict";
exports.__esModule = true;
exports.Message = exports.User = void 0;
var mongoose_1 = require("mongoose");
var statusMessage_1 = require("../enums/statusMessage");
var messageSchema = new mongoose_1.Schema({
    to: String,
    from: String,
    avatar: { type: String, required: true, "default": '' },
    text: String,
    status: { type: String, required: true, "default": statusMessage_1.StatusMessage.Unread },
    subject: String
}, { timestamps: true });
var userSchema = new mongoose_1.Schema({
    name: String,
    countMessage: { type: Number, required: true, "default": 0 },
    countReceivedMessage: { type: Number, required: true, "default": 0 },
    avatar: { type: String, required: true, "default": '' },
    messages: [{ type: messageSchema, required: true, "default": [] }]
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
exports.Message = (0, mongoose_1.model)('Message', messageSchema);
