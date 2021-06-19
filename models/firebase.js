const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
    credential: admin.credential.cert(process.env.SERVICE_FIREBASE),
    storageBucket: 'shipbooking-cc0a7.appspot.com',
})
// Cloud storage
const Bucket = admin.storage().bucket()

module.exports = Bucket
