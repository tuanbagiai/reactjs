import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBmyVma3z38EOo3ra6OtkYKJF3nquLaE4g",
    authDomain: "feecount-fdd25.firebaseapp.com",
    databaseURL: "https://feecount-fdd25.firebaseio.com",
    projectId: "feecount-fdd25",
    storageBucket: "feecount-fdd25.appspot.com",
    messagingSenderId: "151231515963",
    appId: "1:151231515963:web:ee53c8095424d029717b1e",
    measurementId: "G-DW3SCMGG56"
  };
  firebase.initializeApp(config);
  const database =firebase.database();
//   firebase.database().ref().set({
//       name: 'ductuan'
//   });

  export {firebase, database as default};