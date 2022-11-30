"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.generateUsers = void 0;
var faker_1 = require("@faker-js/faker");
var createRandomUser_1 = require("./createRandomUser");
var _ = require("lodash");
var generateUsers = function (language, amount, seed, page) {
    faker_1.faker.locale = language;
    if (seed && !amount) {
        faker_1.faker.seed(seed + page - 1);
        var firstUsersBlock = new Array(10).fill(0).map(function () { return (0, createRandomUser_1.createRandomUser)(language); });
        faker_1.faker.seed(seed + page);
        var secondUsersBlock = new Array(10).fill(0).map(function () { return (0, createRandomUser_1.createRandomUser)(language); });
        return __spreadArray(__spreadArray([], firstUsersBlock, true), secondUsersBlock, true);
    }
    if (seed) {
        faker_1.faker.seed(seed + page);
    }
    return new Array(amount || 10).fill(0).map(function () { return (0, createRandomUser_1.createRandomUser)(language); });
};
exports.generateUsers = generateUsers;
