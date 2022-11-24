const fs = require('fs');

export const createAvatars = () => {
    const fileNames = fs.readdirSync('src/data/avatar');
    const pathRandomFile = fileNames[Math.floor(Math.random() * fileNames.length)]
    return fs.readFileSync(`src/data/avatar/${pathRandomFile}`).toString('base64')
}


