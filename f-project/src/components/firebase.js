   import firebase from "firebase";
   import "firebase/auth";
   import "firebase/firebase-firestore";

   const firebaseConfig={

      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,

    };

    firebase.initializeApp(firebaseConfig);
    export default firebase;