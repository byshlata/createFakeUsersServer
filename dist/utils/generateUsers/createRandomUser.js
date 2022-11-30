"use strict";
exports.__esModule = true;
exports.createRandomUser = void 0;
var faker_1 = require("@faker-js/faker");
var createName_1 = require("../generateUsers/createName");
var createAddress_1 = require("../generateUsers/createAddress");
var createPhone_1 = require("../generateUsers/createPhone");
function createRandomUser(language) {
    return {
        id: faker_1.faker.datatype.uuid().slice(0, 7),
        name: (0, createName_1.createName)(),
        address: (0, createAddress_1.address)(language),
        phoneNumber: (0, createPhone_1.phoneNumber)(language)
    };
}
exports.createRandomUser = createRandomUser;
