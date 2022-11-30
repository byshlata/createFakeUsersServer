"use strict";
exports.__esModule = true;
exports.addressRU11 = exports.addressRU10 = exports.addressRU9 = exports.addressRU8 = exports.addressRU7 = exports.addressRU5 = exports.addressRU6 = exports.addressRU4 = exports.addressRU3 = exports.addressRU2 = exports.addressRU1 = void 0;
var faker_1 = require("@faker-js/faker");
var randomHouseNumber_1 = require("./randomHouseNumber");
var addressRU1 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0433. ").concat(faker_1.faker.address.city(), ", \u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)(), ", \u043A\u0432. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU1 = addressRU1;
var addressRU2 = function () {
    return "\u0420\u0424, ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0433. ").concat(faker_1.faker.address.city());
};
exports.addressRU2 = addressRU2;
var addressRU3 = function () {
    return "\u0433. ".concat(faker_1.faker.address.city(), ", \u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU3 = addressRU3;
var addressRU4 = function () {
    return "\u0420\u043E\u0441\u0441\u0438\u044F, \u0433. ".concat(faker_1.faker.address.city(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU4 = addressRU4;
var addressRU6 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0433. ").concat(faker_1.faker.address.city(), ", \u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)(), ", \u043A\u0432. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU6 = addressRU6;
var addressRU5 = function () {
    return "\u0433. ".concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0420\u043E\u0441\u0441\u0441\u0438\u044F");
};
exports.addressRU5 = addressRU5;
var addressRU7 = function () {
    return "\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F, ".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0433. ").concat(faker_1.faker.address.city());
};
exports.addressRU7 = addressRU7;
var addressRU8 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0433. ").concat(faker_1.faker.address.city(), ", \u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU8 = addressRU8;
var addressRU9 = function () {
    return "".concat(faker_1.faker.address.state(), " \u043E\u0431\u043B., \u0433. ").concat(faker_1.faker.address.city(), ", \u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU9 = addressRU9;
var addressRU10 = function () {
    return "\u0420\u0424, \u0433. ".concat(faker_1.faker.address.city());
};
exports.addressRU10 = addressRU10;
var addressRU11 = function () {
    return "\u0433. ".concat(faker_1.faker.address.city(), ", \u0443\u043B. ").concat(faker_1.faker.address.streetName(), ", \u0434. ").concat((0, randomHouseNumber_1.randomHouseNumber)(), "/").concat((0, randomHouseNumber_1.randomHouseNumber)());
};
exports.addressRU11 = addressRU11;
