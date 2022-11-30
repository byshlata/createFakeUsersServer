"use strict";
exports.__esModule = true;
exports.address = void 0;
var language_1 = require("../../enums/language");
var createAddressRU_1 = require("../generateUsers/createAddressRU");
var createAddressUS_1 = require("../generateUsers/createAddressUS");
var createAddressUK_1 = require("../generateUsers/createAddressUK");
var _ = require("lodash");
var address = function (language) {
    var _a;
    var addressType = (_a = {},
        _a[language_1.Language.RU] = [createAddressRU_1.addressRU1, createAddressRU_1.addressRU2, createAddressRU_1.addressRU3, createAddressRU_1.addressRU4, createAddressRU_1.addressRU5, createAddressRU_1.addressRU6, createAddressRU_1.addressRU7, createAddressRU_1.addressRU8, createAddressRU_1.addressRU9, createAddressRU_1.addressRU10, createAddressRU_1.addressRU11],
        _a[language_1.Language.US] = [createAddressUS_1.addressUS1, createAddressUS_1.addressUS2, createAddressUS_1.addressUS3, createAddressUS_1.addressUS4, createAddressUS_1.addressUS5, createAddressUS_1.addressUS6, createAddressUS_1.addressUS7, createAddressUS_1.addressUS8, createAddressUS_1.addressUS9, createAddressUS_1.addressUS10, createAddressUS_1.addressUS11],
        _a[language_1.Language.UK] = [createAddressUK_1.addressUK1, createAddressUK_1.addressUK2, createAddressUK_1.addressUK3, createAddressUK_1.addressUK4, createAddressUK_1.addressUK5, createAddressUK_1.addressUK6, createAddressUK_1.addressUK7, createAddressUK_1.addressUK8, createAddressUK_1.addressUK9, createAddressUK_1.addressUK10, createAddressUK_1.addressUK11],
        _a);
    var randomIndex = _.random(0, addressType[language_1.Language.RU].length - 1);
    return addressType[language][randomIndex]();
};
exports.address = address;
