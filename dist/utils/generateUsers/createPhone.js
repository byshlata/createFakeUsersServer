"use strict";
exports.__esModule = true;
exports.phoneNumber = void 0;
var language_1 = require("../../enums/language");
var faker_1 = require("@faker-js/faker");
var _ = require("lodash");
var phoneNumber = function (language) {
    var _a;
    var phoneType = (_a = {},
        _a[language_1.Language.RU] = ['+7 989 ###-##-##', '+7902#######', '+7 044 ### ## ##', '+7(908)#######', "+7 909 ###*##*##", "+7-999-###-##-##", "+7-967-##-##-###"],
        _a[language_1.Language.US] = ['+380 092 ###-##-##', '+380039#######', '+380 091 ### ## ##', '+380(073)#######', "+380 092 ###*##*##", "+380-067-###-##-##", "+380-068-##-##-###"],
        _a[language_1.Language.UK] = ['+1 302 ###-##-##', '+1218#######', '+1 794 ### ## ##', '+1(845)#######', "+1 562 ###*##*##", "+1-641-###-##-##", "+1-432-##-##-###"],
        _a);
    var randomIndex = _.random(0, phoneType[language_1.Language.RU].length - 1);
    var type = phoneType[language][randomIndex];
    return faker_1.faker.phone.number(type);
};
exports.phoneNumber = phoneNumber;
