import { faker } from "@faker-js/faker";

export const addressUS1 = () => {
    return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetName()}`
}

export const addressUS2 = () => {
    return `${faker.address.city()}, ${faker.address.streetAddress(true)}`
}

export const addressUS3 = () => {
    return `${faker.address.city()}, ${faker.address.state()}, USA`
}

export const addressUS4 = () => {
    return `USA, ${faker.address.city()}, ${faker.address.streetAddress(false)}`
}

export const addressUS5 = () => {
    return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress(false)}`
}

export const addressUS6 = () => {
    return `${faker.address.streetAddress(true)}, ${faker.address.city()}, ${faker.address.state()}`
}

export const addressUS7 = () => {
    return `${faker.address.city()}, United States`
}

export const addressUS8 = () => {
    return `${faker.address.city()}, ${faker.address.state()}, U.S.A.`
}

export const addressUS9 = () => {
    return `USA, ${faker.address.state()}, ${faker.address.city()} ${faker.address.streetAddress(true)}`
}

export const addressUS10 = () => {
    return `${faker.address.streetName()}, ${faker.address.city()}, United States of America`
}

export const addressUS11 = () => {
    return `United States of America, ${faker.address.state()}`
}

