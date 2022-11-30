import { LanguageType } from "types";
import { Language } from "../../enums/language";
import {
    addressRU1, addressRU10, addressRU11, addressRU2, addressRU3,
    addressRU4, addressRU5, addressRU6, addressRU7, addressRU8, addressRU9
} from "../generateUsers/createAddressRU";
import {
    addressUS1, addressUS10, addressUS11, addressUS2, addressUS3,
    addressUS4, addressUS5, addressUS6, addressUS7, addressUS8, addressUS9
} from "../generateUsers/createAddressUS";
import {
    addressUK1, addressUK10, addressUK11, addressUK2, addressUK3,
    addressUK4, addressUK5, addressUK6, addressUK7, addressUK8, addressUK9
} from "../generateUsers/createAddressUK";

const _ = require("lodash");

export const address = (language: LanguageType) => {
    const addressType = {
        [Language.RU]: [addressRU1, addressRU2, addressRU3, addressRU4, addressRU5, addressRU6, addressRU7, addressRU8, addressRU9, addressRU10, addressRU11],
        [Language.US]: [addressUS1, addressUS2, addressUS3, addressUS4, addressUS5, addressUS6, addressUS7, addressUS8, addressUS9, addressUS10, addressUS11],
        [Language.UK]: [addressUK1, addressUK2, addressUK3, addressUK4, addressUK5, addressUK6, addressUK7, addressUK8, addressUK9, addressUK10, addressUK11],
    }
    const randomIndex = _.random(0, addressType[Language.RU].length - 1)

    return addressType[language][randomIndex]()
}
