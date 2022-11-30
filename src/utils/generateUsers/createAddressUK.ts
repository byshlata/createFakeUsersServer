import { faker } from "@faker-js/faker";
import { randomHouseNumber } from "./randomHouseNumber";

export const addressUK1 = () => {
    return `Україна, ${faker.address.state()} обл.,  м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${randomHouseNumber()}, кв. ${randomHouseNumber()}`
}

export const addressUK2 = () => {
    return `Україна, ${faker.address.state()} обл., м. ${faker.address.city()}`
}

export const addressUK3 = () => {
    return `м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${randomHouseNumber()}`
}

export const addressUK4 = () => {
    return `${faker.address.state()} обл., м. ${faker.address.city()}, д. ${randomHouseNumber()}`
}

export const addressUK5 = () => {
    return `Україна, ${faker.address.state()} обл., м. ${faker.address.city()}`
}

export const addressUK6 = () => {
    return `${faker.address.state()} обл., м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${randomHouseNumber()}-кв. ${randomHouseNumber()}`
}


export const addressUK7 = () => {
    return `Українам., ${faker.address.state()} обл., м. ${faker.address.city()}, вул. ${faker.address.streetName()} `
}

export const addressUK8 = () => {
    return `Україна, ${faker.address.state()} обл., м. ${faker.address.city()}`
}

export const addressUK9 = () => {
    return `м. ${faker.address.city()}, вул. ${faker.address.streetName()}`
}

export const addressUK10 = () => {
    return `${faker.address.state()} обл., м. ${faker.address.city()}, вул. ${faker.address.streetName()}, Україна, `
}

export const addressUK11 = () => {
    return `м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${randomHouseNumber()}/${randomHouseNumber()}`
}
