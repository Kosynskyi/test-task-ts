"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const messaging_1 = require("firebase/messaging");
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUSKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    vapidKey: process.env.REACT_APP_FIREBASE_VAPID,
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const messaging = (0, messaging_1.getMessaging)(app);
(0, messaging_1.getToken)(messaging, { vapidKey: firebaseConfig.vapidKey });
//# sourceMappingURL=firebase.jsx.map