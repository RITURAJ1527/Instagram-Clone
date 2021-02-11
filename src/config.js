import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCLicmVqOBXacFy6Tp3FZUc9oBUGvxgMo0",
  authDomain: "instragram-79a4d.firebaseapp.com",
  databaseURL: "https://instragram-79a4d.firebaseio.com",
  projectId: "instragram-79a4d",
  storageBucket: "instragram-79a4d.appspot.com",
  messagingSenderId: "188345968217",
  appId: "1:188345968217:web:566dc7af82b3bbfa573348",
  measurementId: "G-JV4DXW96W5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
