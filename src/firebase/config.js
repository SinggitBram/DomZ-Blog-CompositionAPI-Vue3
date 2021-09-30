import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCvJvNXhn1e5UBnEi7_7tQMrILIfNhMRdY",
  authDomain: "udemy-vue-firebase-ddfbb.firebaseapp.com",
  projectId: "udemy-vue-firebase-ddfbb",
  storageBucket: "udemy-vue-firebase-ddfbb.appspot.com",
  messagingSenderId: "73088940521",
  appId: "1:73088940521:web:0bcb97386be2c47e89f378",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
