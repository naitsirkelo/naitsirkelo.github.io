import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.APP_API_KEY,
  authDomain: process.env.APP_AUTHDOMAIN,
  databaseURL: process.env.APP_DB_URL,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_MESSAGING,
  appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
