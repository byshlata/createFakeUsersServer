import { UserType } from "types";
import { LanguageType } from "types";
import { faker } from '@faker-js/faker'
import { createRandomUser } from "./createRandomUser";

const _ = require("lodash");

export const generateUsers = (language: LanguageType, amount: number, seed?: number, page?: number): UserType[] => {

    faker.locale = language

    if (seed && !amount) {
        faker.seed(seed + page - 1)
        const firstUsersBlock = new Array(10).fill(0).map(() => createRandomUser(language))
        faker.seed(seed + page)
        const secondUsersBlock = new Array(10).fill(0).map(() => createRandomUser(language))
        return [...firstUsersBlock, ...secondUsersBlock]
    }

    if (seed) {
        faker.seed(seed + page)
    }

    return new Array(amount || 10).fill(0).map(() => createRandomUser(language))
}








