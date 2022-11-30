"use strict";
exports.__esModule = true;
exports.addressUS11 = exports.addressUS10 = exports.addressUS9 = exports.addressUS8 = exports.addressUS7 = exports.addressUS6 = exports.addressUS5 = exports.addressUS4 = exports.addressUS3 = exports.addressUS2 = exports.addressUS1 = void 0;
var faker_1 = require("@faker-js/faker");
var addressUS1 = function () {
    return "".concat(faker_1.faker.address.state(), ", ").concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.streetName());
};
exports.addressUS1 = addressUS1;
var addressUS2 = function () {
    return "".concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.streetAddress(true));
};
exports.addressUS2 = addressUS2;
var addressUS3 = function () {
    return "".concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.state(), ", USA");
};
exports.addressUS3 = addressUS3;
var addressUS4 = function () {
    return "USA, ".concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.streetAddress(false));
};
exports.addressUS4 = addressUS4;
var addressUS5 = function () {
    return "".concat(faker_1.faker.address.state(), ", ").concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.streetAddress(false));
};
exports.addressUS5 = addressUS5;
var addressUS6 = function () {
    return "".concat(faker_1.faker.address.streetAddress(true), ", ").concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.state());
};
exports.addressUS6 = addressUS6;
var addressUS7 = function () {
    return "".concat(faker_1.faker.address.city(), ", United States");
};
exports.addressUS7 = addressUS7;
var addressUS8 = function () {
    return "".concat(faker_1.faker.address.city(), ", ").concat(faker_1.faker.address.state(), ", U.S.A.");
};
exports.addressUS8 = addressUS8;
var addressUS9 = function () {
    return "USA, ".concat(faker_1.faker.address.state(), ", ").concat(faker_1.faker.address.city(), " ").concat(faker_1.faker.address.streetAddress(true));
};
exports.addressUS9 = addressUS9;
var addressUS10 = function () {
    return "".concat(faker_1.faker.address.streetName(), ", ").concat(faker_1.faker.address.city(), ", United States of America");
};
exports.addressUS10 = addressUS10;
var addressUS11 = function () {
    return "United States of America, ".concat(faker_1.faker.address.state());
};
exports.addressUS11 = addressUS11;
