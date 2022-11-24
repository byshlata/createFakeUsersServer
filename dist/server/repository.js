"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getMessage = exports.loginUser = exports.checkNewMessage = exports.readMessage = exports.findAllUser = void 0;
var user_1 = require("../models/user");
var throwError_1 = require("../utils/throwError");
var statusMessage_1 = require("../enums/statusMessage");
var sortMessageByData_1 = require("../utils/sortMessageByData");
var findAllUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.User.find()];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, user.map(function (user) { return user.name; })];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.findAllUser = findAllUser;
var readMessage = function (name, id) { return __awaiter(void 0, void 0, void 0, function () {
    var user, messageRead_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, user_1.User.findOne({ name: name })];
            case 1:
                user = _a.sent();
                user.messages.forEach(function (message) {
                    if (message._id.toString() === id) {
                        message.status = statusMessage_1.StatusMessage.Read;
                        messageRead_1 = message;
                    }
                });
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, Promise.resolve(messageRead_1)];
            case 3:
                error_1 = _a.sent();
                (0, throwError_1.throwError)();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.readMessage = readMessage;
var checkNewMessage = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var user, users, newMessage, countNewMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.User.findOne({ name: name })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, (0, exports.findAllUser)()];
            case 2:
                users = _a.sent();
                if (!user.countReceivedMessage) return [3 /*break*/, 4];
                newMessage = user.messages.slice(-user.countReceivedMessage);
                countNewMessage = user.countReceivedMessage;
                user.countReceivedMessage = 0;
                user.countMessage = newMessage.length;
                return [4 /*yield*/, user.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, {
                        messages: newMessage,
                        counterNewMessage: countNewMessage,
                        users: users,
                        avatar: user.avatar
                    }];
            case 4: return [2 /*return*/, {
                    messages: [],
                    counterNewMessage: 0,
                    users: users,
                    avatar: user.avatar
                }];
        }
    });
}); };
exports.checkNewMessage = checkNewMessage;
var loginUser = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var user, newMessage, countNewMessage, user_2, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, user_1.User.findOne({ name: name })];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                newMessage = user.messages.slice(-user.countReceivedMessage);
                countNewMessage = user.countReceivedMessage;
                user.countReceivedMessage = 0;
                user.countMessage = newMessage.length;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, {
                        messages: (0, sortMessageByData_1.sortMessageByData)(user.messages),
                        counterNewMessage: countNewMessage,
                        avatar: user.avatar,
                        users: []
                    }];
            case 3: return [4 /*yield*/, new user_1.User({ name: name })];
            case 4:
                user_2 = _a.sent();
                //user.avatar = createAvatars()
                return [4 /*yield*/, user_2.save()];
            case 5:
                //user.avatar = createAvatars()
                _a.sent();
                return [2 /*return*/, {
                        messages: [],
                        counterNewMessage: 0,
                        users: [],
                        avatar: ''
                    }];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_2 = _a.sent();
                (0, throwError_1.throwError)();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = loginUser;
var getMessage = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var message, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new user_1.Message({
                    to: payload.to,
                    from: payload.from,
                    subject: payload.subject,
                    text: payload.text
                })];
            case 1:
                message = _a.sent();
                return [4 /*yield*/, user_1.User.findOne({ name: payload.from })];
            case 2:
                user = _a.sent();
                message.avatar = user.avatar;
                return [4 /*yield*/, user_1.User.updateOne({ name: payload.to }, { $push: { messages: message } }, { upsert: true })];
            case 3:
                _a.sent();
                return [4 /*yield*/, user_1.User.updateOne({ name: payload.to }, { $inc: { countReceivedMessage: 1 } }, { upsert: true })];
            case 4:
                _a.sent();
                return [4 /*yield*/, message.save()];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getMessage = getMessage;
