import { faker } from "@faker-js/faker";

const _ = require("lodash");

type SexType = 'female' | 'male';

export const createName = () => {
    const sex: SexType[] = ['female', 'male'];
    const randomIndex = _.random(0, sex.length - 1)

    return `${faker.name.firstName(sex[randomIndex])} ${faker.name.lastName(sex[randomIndex])}`
}

