import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB-Typ709zK8ZvVW_1Ik3YVOtyiOh7O1D8",
    authDomain: "mitambisolutions-eb34c.firebaseapp.com",
    projectId: "mitambisolutions-eb34c",
    storageBucket: "mitambisolutions-eb34c.appspot.com",
    messagingSenderId: "1044758180068",
    appId: "1:1044758180068:web:734d902e2ef539c0dabcf1",
    measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);


export default firebase
