// --------- FOR REALTIME DATABASE

// serviceAccountKey get from Project settings/Service accounts/Generate new private key
// Only owner can do this

const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json");
const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://testing-7a1f0-default-rtdb.firebaseio.com/"
};
const app = admin.initializeApp(firebaseConfig);
const db = admin.database(app)

module.exports = {
    users: db.ref('user_id'),
    trays: db.ref('tray_id')
};

// -------- FOR FIRESTORE DATABASE

// const admin = require("firebase-admin");
// const serviceAccount = require("./ServiceAccountKey.json");
// const firebaseConfig = {
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://testing-7a1f0-default-rtdb.firebaseio.com/"
// };
// const app = admin.initializeApp(firebaseConfig);
// const db = admin.firestore()
// module.exports = db;