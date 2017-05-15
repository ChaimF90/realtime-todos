import * as bcrypt from 'bcrypt';

async function hashPassword(password: string) {
    let hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

async function comparePassword(password: string, enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, password);
}

export {
    hashPassword,
    comparePassword
}