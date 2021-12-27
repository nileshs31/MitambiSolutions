const firebase = require('firebase');
require('firebase/compat/firestore');

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

const ref = firebase.firestore().collection("OurWork");

var OurWork = [
    {
        'id': 2,
        'Title': "Blinking Light Detection using Darknet YOLO",
        'isLatest': false,
        'Description':
            "This project involves the detection of blinking lights on any particular product to provide better and easier support. A darknet YOLO model is trained to detect lights on a particular product, which can be a router, printer, etc"
    }
]

OurWork.forEach(function (obj) {
    ref.add({
        id: obj.id,
        Title: obj.Title,
        isLatest: obj.isLatest,
        Description: obj.Description
    })
}).then(function (obj) {
    console.log("Doc Writtern with id:" + obj.id)
}).catch(function (error) {
    console.log("Error: " + error)
})