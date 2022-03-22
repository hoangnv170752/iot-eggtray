const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDLmhcXACdSpMFQ4E_XWNgmsHS03gK1Bog",
    authDomain: "eggtray-iotproject.firebaseapp.com",
    databaseURL: "https://eggtray-iotproject-default-rtdb.firebaseio.com",
    projectId: "eggtray-iotproject",
    storageBucket: "eggtray-iotproject.appspot.com",
    messagingSenderId: "234675943641",
    appId: "1:234675943641:web:abb386535b3ac21eaa66c8",
    measurementId: "G-6P062F2W8M"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;