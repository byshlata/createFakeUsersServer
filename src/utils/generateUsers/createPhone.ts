import { LanguageType } from "types";
import { Language } from "../../enums/language";
import { faker } from "@faker-js/faker";

const _ = require("lodash");

export const phoneNumber = (language: LanguageType) => {
    const phoneType = {
        [Language.RU]: ['+7 989 ###-##-##', '+7902#######', '+7 044 ### ## ##', '+7(908)#######', "+7 909 ###*##*##", "+7-999-###-##-##", "+7-967-##-##-###"],
        [Language.US]: ['+380 092 ###-##-##', '+380039#######', '+380 091 ### ## ##', '+380(073)#######', "+380 092 ###*##*##", "+380-067-###-##-##", "+380-068-##-##-###"],
        [Language.UK]: ['+1 302 ###-##-##', '+1218#######', '+1 794 ### ## ##', '+1(845)#######', "+1 562 ###*##*##", "+1-641-###-##-##", "+1-432-##-##-###"],
    }
    const randomIndex = _.random(0, phoneType[Language.RU].length - 1)
    const type = phoneType[language][randomIndex]

    return faker.phone.number(type)
}
