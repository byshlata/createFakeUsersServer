"use strict";
exports.__esModule = true;
exports.addressUK11 = exports.addressUK10 = exports.addressUK9 = exports.addressUK8 = exports.addressUK7 = exports.addressUK6 = exports.addressUK5 = exports.addressUK4 = exports.addressUK3 = exports.addressUK2 = exports.addressUK1 = void 0;
var faker_1 = require("@faker-js/faker");
var randomHouseNumber_1 = require("./randomHouseNumber");
var addressUK1 = function () {
    return "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B.,  \u043C. ").concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)(), ", \u043A\u0432. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressUK1 = addressUK1;
var addressUK2 = function () {
    return "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city());
};
exports.addressUK2 = addressUK2;
var addressUK3 = function () {
    return "\u043C. ".concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressUK3 = addressUK3;
var addressUK4 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressUK4 = addressUK4;
var addressUK5 = function () {
    return "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city());
};
exports.addressUK5 = addressUK5;
var addressUK6 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)(), "-\u043A\u0432. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressUK6 = addressUK6;
var addressUK7 = function () {
    return "\u0423\u043A\u0440\u0430\u0457\u043D\u0430\u043C., ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName(), " ");
};
exports.addressUK7 = addressUK7;
var addressUK8 = function () {
    return "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city());
};
exports.addressUK8 = addressUK8;
var addressUK9 = function () {
    return "\u043C. ".concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName());
};
exports.addressUK9 = addressUK9;
var addressUK10 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u043C. ").concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0423\u043A\u0440\u0430\u0457\u043D\u0430, ");
};
exports.addressUK10 = addressUK10;
var addressUK11 = function () {
    return "\u043C. ".concat(faker_1.faker.address.city(), ", \u0432\u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)(), "/").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressUK11 = addressUK11;
