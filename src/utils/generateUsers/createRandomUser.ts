import { LanguageType, UserType } from "types";
import { faker } from "@faker-js/faker";
import { createName } from "../generateUsers/createName";
import { address } from "../generateUsers/createAddress";
import { phoneNumber } from "../generateUsers/createPhone";

export function createRandomUser(language: LanguageType): UserType {
    return {
        id: faker.datatype.uuid().slice(0, 7),
        name: createName(),
        address: address(language),
        phoneNumber: phoneNumber(language)
    };
}
