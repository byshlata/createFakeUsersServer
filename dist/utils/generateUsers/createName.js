"use strict";
exports.__esModule = true;
exports.createName = void 0;
var faker_1 = require("@faker-js/faker");
var _ = require("lodash");
var createName = function () {
    var sex = ['female', 'male'];
    var randomIndex = _.random(0, sex.length - 1);
    return "".concat(faker_1.faker.name.firstName(sex[randomIndex]), " ").concat(faker_1.faker.name.lastName(sex[randomIndex]));
};
exports.createName = createName;
