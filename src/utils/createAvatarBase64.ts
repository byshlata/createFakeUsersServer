const fs = require('fs');

export const createAvatars = () => {
    const fileNames = fs.readdirSync('dist/data/avatar');
    const pathRandomFile = fileNames[Math.floor(Math.random() * fileNames.length)]
    return fs.readFileSync(`dist/data/avatar/${pathRandomFile}`).toString('base64')
}


