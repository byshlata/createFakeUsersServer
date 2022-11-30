import { faker } from "@faker-js/faker";
import { randomHouseNumber } from "./randomHouseNumber";

export const addressRU1 = () => {
    return `${faker.address.state()} обл., г. ${faker.address.city()}, ул. ${faker.address.streetName()}, д. ${randomHouseNumber()}, кв. ${randomHouseNumber()}`
}

export const addressRU2 = () => {
    return `РФ, ${faker.address.state()} обл., г. ${faker.address.city()}`
}

export const addressRU3 = () => {
    return `г. ${faker.address.city()}, ул. ${faker.address.streetName()}, д. ${randomHouseNumber()}`
}

export const addressRU4 = () => {
    return `Россия, г. ${faker.address.city()}, д. ${randomHouseNumber()}`
}

export const addressRU6 = () => {
    return `${faker.address.state()} обл., г. ${faker.address.city()}, ул. ${faker.address.streetName()}, д. ${randomHouseNumber()}, кв. ${randomHouseNumber()}`
}

export const addressRU5 = () => {
    return `г. ${faker.address.city()}, ${faker.address.state()} обл., Росссия`
}

export const addressRU7 = () => {
    return `Российская Федерация, ${faker.address.state()} обл., г. ${faker.address.city()}`
}

export const addressRU8 = () => {
    return `${faker.address.state()} обл., г. ${faker.address.city()}, ул. ${faker.address.streetName()}, д. ${randomHouseNumber()}`
}

export const addressRU9 = () => {
    return `${faker.address.state()} обл., г. ${faker.address.city()}, ул. ${faker.address.streetName()}, д. ${randomHouseNumber()}`
}

export const addressRU10 = () => {
    return `РФ, г. ${faker.address.city()}`
}

export const addressRU11 = () => {
    return `г. ${faker.address.city()}, ул. ${faker.address.streetName()}, д. ${randomHouseNumber()}/${randomHouseNumber()}`
}
