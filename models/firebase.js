const admin = require('firebase-admin')
const { ENV } = require('../config')

// Initialize firebase admin SDK
admin.initializeApp({
    credential: admin.credential.cert(ENV.FIREBASE_KEY),
    storageBucket: 'shipbooking-cc0a7.appspot.com',
})
// Cloud storage
const Bucket = admin.storage().bucket()

module.exports = Bucket
