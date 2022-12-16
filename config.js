// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyD_cuvJ9O2z1wtBuTTixChpl-BzhojPv1Q",
//     authDomain: "test-acbc9.firebaseapp.com",
//     projectId: "test-acbc9",
//     storageBucket: "test-acbc9.appspot.com",
//     messagingSenderId: "521231791391",
//     appId: "1:521231791391:web:b07046ba0adafe1ebf6c2a",
//     measurementId: "G-86JQ9WHSJQ"
// }

// if (!firebase.app.length) {
//     firebase.initializeApp(firebaseConfig)
// }

// export { firebase };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_cuvJ9O2z1wtBuTTixChpl-BzhojPv1Q",
    authDomain: "test-acbc9.firebaseapp.com",
    projectId: "test-acbc9",
    storageBucket: "test-acbc9.appspot.com",
    messagingSenderId: "521231791391",
    appId: "1:521231791391:web:b07046ba0adafe1ebf6c2a",
    measurementId: "G-86JQ9WHSJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default { firebase }