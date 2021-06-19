module.exports = {
    NODE_PORT: process.env.NODE_PORT || 3000,
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'booking',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || '',
}
